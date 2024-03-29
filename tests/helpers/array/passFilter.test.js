import { snippetTester } from 'tests/utils';

suite('Arrays: passFilter');

test('Positive: passFilter @example', async function () {
    await snippetTester.test(({ passFilter }) => {
        const items = [ 1, 2, null, 0, undefined, 3, 5 ];

        return items.filter(passFilter);
    }, [ 1, 2, null, 0, undefined, 3, 5 ]);
});
