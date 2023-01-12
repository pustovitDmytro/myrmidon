import { FunctionTester } from 'tests/utils';
import { getMethodNames } from 'tests/entry';

suite('Decorators: getMethodNames');
const tester = new FunctionTester(getMethodNames);

test('Positive: getMethodNames @example', function () {
    tester.test(
        new class A {
            B() {}

            get C() {
                return 1;
            }

            D = 1;
        }(),
        [ 'B', 'C' ]
    );
});
