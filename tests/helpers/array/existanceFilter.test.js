import { SnippetTesterAsync } from 'tests/utils';
import { existanceFilter } from 'tests/entry';

suite('Arrays: existanceFilter');

test('Positive: existanceFilter @example', async () => {
    await SnippetTesterAsync(() => {
        const items = [ 1, 2, null, 0, undefined, 3, 5 ];

        return items.filter(existanceFilter);
    }, [ 1, 2, 0, 3, 5 ]);
});
