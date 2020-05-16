import { SnippetTester } from 'tests/utils';
import { passFilter } from 'tests/entry';

suite('Arrays: passFilter');

test('Positive: passFilter @examples', () => {
    SnippetTester(() => {
        const items = [ 1, 2, null, 0, undefined, 3, 5 ];

        return items.filter(passFilter);
    }, [ 1, 2, null, 0, undefined, 3, 5 ]);
});
