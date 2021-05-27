import { toArray } from '../../entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(toArray);

suite('Arrays: toArray');

test('Positive: empty value @example', function () {
    tester.test(null, []);
    tester.test(undefined, []);
    tester.test([], []);
    tester.test('', [ '' ]);
    tester.test(0, [ 0 ]);
});
