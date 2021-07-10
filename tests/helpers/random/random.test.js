import { snippetTester } from 'tests/utils';

suite('random');

test('Positive: random integer @example', async function () {
    await snippetTester.test(({ random }) => {
        return random.int(10, 0); // uniform distribution [0, 10]
    });
});
