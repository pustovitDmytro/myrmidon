import { assert } from 'chai';
import { FunctionDecorator } from 'tests/entry';

suite('Decorators: FunctionDecorator');

function addOne(x) {
    if (x < 0) throw new Error('Bad x');

    return x + 1;
}

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
