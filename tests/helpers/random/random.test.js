import { SnippetTesterAsync } from 'tests/utils';

suite('random');

test('Positive: random integer @example', async () => {
    await SnippetTesterAsync(({ random }) => {
        const singleRandomNumber = random.int(10, 0);

        return singleRandomNumber; // uniform distribution [0, 10]
    });
});
