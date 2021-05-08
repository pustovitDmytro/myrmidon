/* istanbul ignore file */
// TODO: test
import { isPromise, isFunction, isGetter } from './checkType';

const deepFunctions = x =>
    x && x !== Object.prototype &&
  Object.getOwnPropertyNames(x)
      .filter(name => isGetter(x, name) || isFunction(x[name]))
      .concat(deepFunctions(Object.getPrototypeOf(x)) || []);

const distinctDeepFunctions = x => Array.from(new Set(deepFunctions(x)));

export const getMethodNames = x => distinctDeepFunctions(x).filter(name => name !== 'constructor' && name.indexOf('_') !== 0);

function getMethodDescriptor(propertyName, target) {
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

function classMethodDecorator({ methodName, descriptor, config }) {
    descriptor.value = functionDecorator.call( // eslint-disable-line no-param-reassign
        this,
        descriptor.value,
        { methodName, config }
    );

    return descriptor;
}

function _onSuccess({ result }) {
    return result;
}

function _onParams({ params }) {
    return params;
}

export function decorate(target, methods) {
    const isDecorateFunction = isFunction(target);

    const defaultConfig = {
        onError   : console.error,
        chronicle : methods._chronicle
    };

    const decorated = isDecorateFunction
        ? functionDecorator(target, { config : {
            onParams  : methods.before_default || _onParams,
            onSuccess : methods.after_default || _onSuccess,
            ...defaultConfig
        } })
        : target;
    const injectMethodNames = getMethodNames(methods);

    injectMethodNames
        .filter(name => !name.includes('before_') && !name.includes('after_'))
        .forEach(methodName => {
            if (isDecorateFunction) {
                decorated[methodName] = methods[methodName];
            } else {
                decorated[methodName] = methods[methodName];
            }
        });

    getMethodNames(target)
        .forEach(methodName => {
            const onParamsMethod = injectMethodNames.find(m => m === `before_${methodName}`);
            const onSuccessMethod = injectMethodNames.find(m => m === `after_${methodName}`);

            if (isDecorateFunction && [ 'caller', 'caller', 'arguments' ].includes(methodName)) return;
            if (!onParamsMethod && !onSuccessMethod) return;
            const config = {
                onParams  : onParamsMethod ? methods[onParamsMethod] : _onParams,
                onSuccess : onSuccessMethod ? methods[onSuccessMethod] : _onSuccess,
                ...defaultConfig
            };

            if (isDecorateFunction) {
                decorated[methodName] = functionDecorator(target[methodName], { methodName, config });
            } else {
                const descriptor = getMethodDescriptor(methodName, decorated);

                Object.defineProperty(
                    decorated,
                    methodName,
                    classMethodDecorator.call(
                        this,
                        {
                            methodName,
                            descriptor,
                            config
                        }
                    )
                );
            }
        });

    return decorated;
}

function functionDecorator(method, { methodName, config }) {
    const methodData = {
        method    : methodName,
        chronicle : config.chronicle
    };

    return function f(...args) {
        const params = config.onParams({ params: args, context: this, ...methodData });
        const data = { rawParams: args, params, context: this, ...methodData };

        try {
            const promise = method?.apply(this, params);

            if (isPromise(promise)) {
                return promise
                    .then(result => config.onSuccess({ result, ...data }))
                    .catch(error => config.onError({ error, ...data }));
            }

            return config.onSuccess({ result: promise, ...data });
        } catch (error) {
            config.onError({ error, ...data });
        }
    };
}
