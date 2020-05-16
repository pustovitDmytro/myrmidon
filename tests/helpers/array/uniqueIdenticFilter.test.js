import { SnippetTester } from 'tests/utils';
import { uniqueIdenticFilter } from 'tests/entry';

suite('Arrays: uniqueIdenticFilter');

test('Positive: uniqueIdenticFilter for array of numbers @snippet', () => {
    SnippetTester(() => {
        const items = [ 1, 2, '4', 3, 2, 1, 4, '2', 3, 5 ];

        return items.filter(uniqueIdenticFilter);
    }, [ 1, 2, '4', 3, 4, '2', 5 ]);
});
