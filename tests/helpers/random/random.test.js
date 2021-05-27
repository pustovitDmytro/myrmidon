import { SnippetTesterAsync } from 'tests/utils';

suite('random');

test('Positive: random integer @example', async function () {
    await SnippetTesterAsync(({ random }) => {
        return random.int(10, 0); // uniform distribution [0, 10]
    });
});
