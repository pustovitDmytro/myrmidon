import { SnippetTesterAsync } from 'tests/utils';

suite('Common: pause');

test('Positive: pause @example', async () => {
    await SnippetTesterAsync(async ({ pause }) => {
        await pause(10);
        // 10ms after
    });
});
