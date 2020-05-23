import { SnippetTesterAsync } from 'tests/utils';
import { retry } from 'tests/entry';

suite('custom: retry');

test('Positive: retry function calls @snippet', async () => {
    await SnippetTesterAsync(() => {
        let i = 0;

        function failing() {
            if (++i < 3) throw new Error(`${i} < 3`);

            return i;
        }

        return retry(() => failing(), { retry: 5 });
    }, 3);
});


test('Positive: retry async function with exponential backoff @snippet', async () => {
    let i = 0;

    async function failing() {
        if (++i < 3) throw new Error(`${i} < 3`);

        return i;
    }

    await SnippetTesterAsync(() => {
        return retry(async () => {
            const result = await failing();

            return result;
        }, { retry: 5, timeout: { min: 1, max: 100 } });
    }, 3);
});


test('Negative: abort retrying with abort function @snippet', async () => {
    let i = 0;

    async function failing() {
        if (++i < 3) throw new Error(`${i} < 3`);

        return i;
    }

    await SnippetTesterAsync(async () => {
        await retry(async (abort) => {
            await failing().catch(error => {
                if (error.message.match('2 < 3')) abort(error);
                throw error;
            });
        }, { retry: 5, timeout: 5 });
    }, new Error('2 < 3'));
});
