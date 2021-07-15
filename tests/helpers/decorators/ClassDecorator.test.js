import { assert } from 'chai';
import { ClassDecorator } from 'tests/entry';

suite('Decorators: ClassDecorator');

class Calculator {
    constructor() {
        this.base = 1;
    }

    _two = 2

    get two() {
        return this._two;
    }

    sum(a, b) {
        return a + b;
    }
}

function factorial(n) {
    return (n > 1) ? n * factorial(n - 1) : 1;
}

test('Positive: empty class decorator', function () {
    const decorator = new ClassDecorator({ config: {} });
    const C = decorator.decorate(Calculator);
    const c = new C();

    assert.equal(c.sum(1, 2), 3);
    assert.equal(c.two, 2);
});

test('Positive: empty function decorator', function () {
    const decorator = new ClassDecorator({ config: {} });
    const f = decorator.decorate(factorial);

    assert.equal(f(1), 1);
    assert.equal(f(5), 120);
});

