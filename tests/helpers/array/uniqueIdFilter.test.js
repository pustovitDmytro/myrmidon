import { snippetTester } from 'tests/utils';

suite('Arrays: uniqueIdFilter');

test('Positive: uniqueIdFilter for array of users @example', async function () {
    await snippetTester.test(({ uniqueIdFilter }) => {
        const users = [
            { id: 1, name: 'Maud Kim' },
            { id: 2, name: 'Bettie Henderson' },
            { id: 3, name: 'Estella Snyder' },
            { id: 1, name: 'Maud Kim' }
        ];

        return users.filter(uniqueIdFilter);
    }, [
        { id: 1, name: 'Maud Kim' },
        { id: 2, name: 'Bettie Henderson' },
        { id: 3, name: 'Estella Snyder' }
    ]);
});
