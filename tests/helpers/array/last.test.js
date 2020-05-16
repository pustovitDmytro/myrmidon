import { FunctionTester } from 'tests/utils';
import { last } from 'tests/entry';

suite('Arrays: last');
const tester = new FunctionTester(last);

test('Positive: last @examples', () => {
    tester.test([ 1, 2, 3, 4, 5 ], 5);
});
