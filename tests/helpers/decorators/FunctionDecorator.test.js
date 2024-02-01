import { assert } from 'chai';
import { FunctionDecorator } from 'tests/entry';
import 'reflect-metadata';

suite('Decorators: FunctionDecorator');

function addOne(x) {
    if (x < 0) throw new Error('Bad x');

    return x + 1;
}

const metadataKey = 'add_one_meta';

Reflect.defineMetadata(metadataKey, { watermark: true }, addOne);

test('Positive: onSuccess', function () {
    class Decorator extends FunctionDecorator {
        onSuccess({ result }) {
            return super.onSuccess({ result }) + 1;
        }
    }

    const decorator = new Decorator({ config: {} });
    const addTwo = decorator.run(addOne);

    assert.equal(addTwo(2), 4);
    assert.equal(addTwo(5), 7);
});

test('Negative: keepReflectMetadata', function () {
    class Decorator extends FunctionDecorator {
        decoratedKey =  '_decorated_in_test';
    }

    const decorator = new Decorator({ config: {} });
    const addTwo = decorator.run(addOne);

    assert.equal(addTwo(2), 3);
    assert.notExists(
        Reflect.getMetadata(metadataKey, addTwo)
    );
});

test('Positive: keepReflectMetadata', function () {
    const decorator = new FunctionDecorator({ config: { keepReflectMetadata: [ metadataKey ] } });
    const addTwo = decorator.run(addOne);

    assert.equal(addTwo(2), 3);

    assert.deepEqual(
        Reflect.getMetadata(metadataKey, addTwo),
        { watermark: true }
    );
});

test('Positive: duplicates', function () {
    class Decorator extends FunctionDecorator {
        onSuccess({ result }) {
            return super.onSuccess({ result }) + 1;
        }
    }

    const decorator = new Decorator({ config: { duplicates: false } });
    const addTwo = decorator.run(addOne);
    const addThree = decorator.run(addTwo);

    assert.equal(addTwo(2), 4);
    assert.equal(addThree(5), 7);
});

test('Negative: duplicates', function () {
    class Decorator extends FunctionDecorator {
        onSuccess({ result }) {
            return super.onSuccess({ result }) + 1;
        }
    }

    const decorator = new Decorator({ config: { duplicates: true } });
    const addTwo = decorator.run(addOne);
    const addThree = decorator.run(addTwo);

    assert.equal(addTwo(2), 4);
    assert.equal(addThree(5), 8);
});

test('Negative: fail with onParams + onError', function () {
    class Decorator extends FunctionDecorator {
        onParams({ params }) {
            return [ params[0] - 2 ];
        }

        onError({ error }) {
            error._handled = 1;
            super.onError(error);
        }
    }

    const decorator = new Decorator({ config: {} });
    const delOne = decorator.run(addOne);

    assert.equal(delOne(3), 2);
    try {
        delOne(1);
        assert.fail('Expected to throw error');
    } catch (error)  {
        assert.equal(error.message, 'Bad x');
    }
});
