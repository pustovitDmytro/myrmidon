import { groupBy } from 'tests/entry';
import { FunctionTester } from 'tests/utils';

const tester = new FunctionTester(groupBy);

suite('Arrays: groupBy');

test('Positive: groupBy @example', function () {
    tester.test(
        [
            { group: 'A', value: 9 },
            { group: 'B', value: 1 },
            { group: 'A', value: 2 }
        ],
        'group',
        {
            A : [ { group: 'A', value: 9 }, { group: 'A', value: 2 } ],
            B : [ { group: 'B', value: 1 } ]
        }
    );
});
