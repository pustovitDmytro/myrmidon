import { FunctionTester } from 'tests/utils';
import { mean } from 'tests/entry';

suite('Math: mean');
const tester = new FunctionTester(mean);

test('Positive: mean @example', function () {
    tester.test(
        [ 2, 2 ],
        2
    );

    tester.test(
        [ 1, 2,  0, -6 ],
        -0.75
    );
});
