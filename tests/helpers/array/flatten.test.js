import { FunctionTester } from 'tests/utils';
import { flatten } from 'tests/entry';

suite('Arrays: flatten');
const tester = new FunctionTester(flatten);

test('Positive: flatten @example', function () {
    tester.test(
        [ 1, 2, [ 'a', 'b', [ 'c' ] ], 0 ],
        [ 1, 2, 'a', 'b',  'c', 0 ]
    );
});
