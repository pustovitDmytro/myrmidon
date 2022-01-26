import { isPromise, isFunction, isGetter, isClass } from './checkType';

const deepFunctions = x =>
    x && x !== Object.prototype &&
  [ ...Object.getOwnPropertyNames(x)
      .filter(name => isGetter(x, name) || isFunction(x[name])),
  ...(deepFunctions(Object.getPrototypeOf(x)) || []) ];

export const rawMethodNames = x => [ ...new Set(deepFunctions(x)) ];
export const getMethodNames = x => rawMethodNames(x).filter(name => name !== 'constructor' && name.indexOf('_') !== 0);

export function getMethodDescriptor(propertyName, target) {
    if (target.hasOwnProperty(propertyName)) {
        return Object.getOwnPropertyDescriptor(target, propertyName);
    }

    return {
        configurable : true,
        enumerable   : true,
        writable     : true,
        value        : target[propertyName]
    };
}

export class FunctionDecorator {
    constructor({ config }) {
        this.config = config;
    }

    prepareData({ context, methodName }) {
        return {
            context,
            methodName,
            config : this.config
        };
    }

    onParams({ params }) {
        return params;
    }

    onSuccess({ result }) {
        return result;
    }

    onError(error) {
        throw error;
    }

    run(method) {
        // eslint-disable-next-line unicorn/no-this-assignment
        const decorator = this;
        const methodName = decorator.config.methodName || method.name;

        return function (...args) {
            const methodData = decorator.prepareData({
                context : this,
                methodName,
                config  : decorator.config
            });

            const params = decorator.onParams({
                params : args,
                ...methodData
            });

            const data = {
                rawParams : args,
                params,
                ...methodData
            };

            try {
                const promise = method?.apply(this, params);

                if (isPromise(promise)) {
                    return promise
                    // eslint-disable-next-line promise/prefer-await-to-then
                        .then(result => decorator.onSuccess({ result, ...data }))
                    // eslint-disable-next-line promise/prefer-await-to-callbacks,promise/prefer-await-to-then
                        .catch(error => decorator.onError({ error, ...data }));
                }

                return decorator.onSuccess({ result: promise, ...data });
            } catch (error) {
                decorator.onError({ error, ...data });
            }
        };
    }
}

export class ClassMethodDecorator {
    constructor({
        methodName,
        descriptor,
        config,
        target
    }) {
        this.methods = [ 'value', 'initializer' ];
        this.methodName = methodName;
        this.descriptor = descriptor;
        this.config = config;
        this.target = target;

        this.functionDecorator = new this.constructor.FunctionDecorator({
            config : this.getFunctionDecoratorConfig()
        });
    }

    static FunctionDecorator = FunctionDecorator;

    getFunctionDecoratorConfig() {
        return {
            ...this.config,
            methodName : this.methodName
        };
    }

    'handle_initializer'(original) {
        const fd = this.functionDecorator;
        const target = this.target;

        return function () {
            return fd.run(original.call(target));
        };
    }

    handle(original) {
        return this.functionDecorator.run(original);
    }

    run() {
        const safeMethods = this.methods.filter(k => this.descriptor[k] && isFunction(this.descriptor[k]));

        for (const key of safeMethods) {
            const original = this.descriptor[key];

            this.descriptor[key] = isFunction(this[`handle_${key}`])
                ? this[`handle_${key}`](original)
                : this.handle(original);
        }

        return this.descriptor;
    }
}


export class ClassDecorator {
    constructor({ config }) {
        this.config = config;
    }

    decorate(target) {
        if (isClass(target)) {
            return this.decorateClass(target);
        }

        if (isFunction(target)) {
            return this.decorateFunction(target);
        }

        return this.decorateClass(target);
    }

    getFunctionDecoratorConfig({ target }) {
        return {
            ...this.config,
            methodName : target.name
        };
    }

    decorateFunction(target) {
        const functionDecorator = new this.constructor.ClassMethodDecorator.FunctionDecorator({
            config : this.getFunctionDecoratorConfig({ target })
        });

        const decorated = functionDecorator.run(target);

        for (const methodName of rawMethodNames(target)) {
            if (this._unsafeFunctionProps.includes(methodName)) continue;

            if (this.filterMethodName(methodName)) {
                decorated[methodName] = functionDecorator.run(target[methodName]);
            } else {
                decorated[methodName] = target[methodName];
            }
        }

        return decorated;
    }

    _unsafeFunctionProps = [
        'caller',
        'callee',
        'arguments'
    ];

    filterMethodName(name) {
        return !this._unsafeFunctionProps.includes(name);
    }

    static ClassMethodDecorator = ClassMethodDecorator;

    getClassMethodDecoratorConfig() {
        return this.config;
    }

    decorateClass(target) {
        const decoratedMethodNames = rawMethodNames(target).filter(name => this.filterMethodName(name));

        for (const methodName of decoratedMethodNames) {
            const descriptor = getMethodDescriptor(methodName, target);

            if (!descriptor) continue;

            const methodDecorator = new this.constructor.ClassMethodDecorator({
                methodName,
                descriptor,
                target,
                config : this.getClassMethodDecoratorConfig(
                    { methodName, descriptor, target }
                )
            });

            Object.defineProperty(
                target,
                methodName,
                methodDecorator.run()
            );
        }

        return target;
    }
}
