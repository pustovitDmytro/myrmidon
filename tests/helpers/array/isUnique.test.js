import { FunctionTester } from 'tests/utils';
import { isUnique } from 'tests/entry';

suite('Arrays: isUnique');
const tester = new FunctionTester(isUnique);

test('Positive: isUnique @example', () => {
    tester.test([ 1, 2, 3, 4, 5 ], true);
    tester.test([ 1, 2, null, null, 3, 4, 5 ], { ignoreEmpty: true }, true);
    tester.test([ { id: 1 }, { id: 2 }, null, { id: 5 } ], { ignoreEmpty: true, field: 'id' }, true);
});

test('Negative: isUnique @example', () => {
    tester.test([ 1, 2, 3, 2, 4, 5 ], false);
});
