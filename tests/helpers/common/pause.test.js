import { snippetTester } from 'tests/utils';

suite('Common: pause');

test('Positive: pause @example', async function () {
    await snippetTester.test(async ({ pause }) => {
        await pause(10);
        // 10ms after
    });
});
