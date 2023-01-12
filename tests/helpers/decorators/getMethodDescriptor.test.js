import { snippetTester } from 'tests/utils';

suite('Decorators: getMethodDescriptor');

test('Positive: getMethodDescriptor', async function () {
    await snippetTester.test(({ getMethodDescriptor }) => {
        class A {
            B() {}

            get C() {
                return 1;
            }

            D = 1;
        }
        const a = new A();

        return getMethodDescriptor(a, 'C');
    }, {
        configurable : true,
        enumerable   : true,
        writable     : true,
        value        : undefined
    });
});
