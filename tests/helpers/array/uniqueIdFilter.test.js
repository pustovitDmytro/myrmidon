import { SnippetTester } from 'tests/utils';
import { uniqueIdFilter } from 'tests/entry';

suite('Arrays: uniqueIdFilter');

test('Positive: uniqueIdFilter for array of users @snippet', () => {
    SnippetTester(() => {
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
