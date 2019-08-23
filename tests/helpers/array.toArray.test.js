import { toArray } from '../entry';
import { FunctionTester } from '../utils';

const tester = new FunctionTester(toArray);

suite('Arrays: toArray');

test('Positive: empty value', function () {
    tester.testOne(null, []);
    tester.testOne(undefined, []);
    tester.testOne([], []);
    tester.testOne('', [ '' ]);
    tester.testOne(0, [ 0 ]);
});
