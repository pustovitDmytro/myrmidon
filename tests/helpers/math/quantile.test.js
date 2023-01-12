import { FunctionTester } from 'tests/utils';
import { quantile } from 'tests/entry';

suite('Math: quantile');
const tester = new FunctionTester(quantile);

test('Positive: quantile @example', function () {
    tester.test(
        [ 2, 2 ],
        0.25,
        2
    );

    tester.test(
        [ 1, 2,  0, -6 ],
        0.75,
        1.25
    );

    tester.test(
        [ 5 ],
        0.5,
        5
    );
});
