import { snippetTester } from 'tests/utils';

suite('Arrays: uniqueIdenticFilter');

test('Positive: uniqueIdenticFilter for array of numbers @example', async function () {
    await snippetTester.test(({ uniqueIdenticFilter }) => {
        const items = [ 1, 2, '4', 3, 2, 1, 4, '2', 3, 5 ];

        return items.filter(uniqueIdenticFilter);
    }, [ 1, 2, '4', 3, 4, '2', 5 ]);

    await snippetTester.test(({ uniqueIdenticFilter }) => {
        const items = [ 6, 7 ];

        return items.filter(uniqueIdenticFilter);
    }, [ 6, 7 ]);
});
