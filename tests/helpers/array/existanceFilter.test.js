import { SnippetTesterAsync } from 'tests/utils';

suite('Arrays: existanceFilter');

test('Positive: existanceFilter @example', async function () {
    await SnippetTesterAsync(({ existanceFilter }) => {
        const items = [ 1, 2, null, 0, undefined, 3, 5 ];

        return items.filter(existanceFilter);
    }, [ 1, 2, 0, 3, 5 ]);
});
