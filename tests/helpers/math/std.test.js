import { FunctionTester } from 'tests/utils';
import { std } from 'tests/entry';

suite('Math: std');
const tester = new FunctionTester(std);

test('Positive: std @example', function () {
    tester.test(
        [ 2, 2 ],
        0
    );

    tester.test(
        [ 1, 2,  0, -6 ],
        3.112_474_899_497_183
    );
});
