import { FunctionTester } from 'tests/utils';
import { sum } from 'tests/entry';

suite('Math: sum');
const tester = new FunctionTester(sum);

test('Positive: sum @example', function () {
    tester.test(
        [ 2, 2 ],
        4
    );

    tester.test(
        [ 1, 2,  0, -6 ],
        -3
    );
});
