/* eslint-disable sonarjs/no-identical-functions */
import { assert } from 'chai';
import { snippetTester } from 'tests/utils';
import { retry as helper, pause } from '../../entry';

suite('custom: retry');

test('Positive: retry function calls @example', async function () {
    await snippetTester.test(({ retry }) => {
        let i = 0;

        function failing() {
            if (++i < 3) throw new Error(`${i} < 3`);

            return i;
        }

        return retry(() => failing(), { retry: 5 });
    }, 3);
});


test('Positive: retry async function with exponential backoff @example', async function () {
    let i = 0;

    async function failing() {
        if (++i < 3) throw new Error(`${i} < 3`);

        return i;
    }

    await snippetTester.test(({ retry }) => {
        return retry(async () => {
            return failing();
        }, { retry: 5, timeout: { min: 1, max: 100 } });
    }, 3);
});


test('Negative: abort retrying with abort function @example', async function () {
    let i = 0;

    async function failing() {
        if (++i < 3) throw new Error(`${i} < 3`);

        return i;
    }

    await snippetTester.test(async ({ retry }) => {
        await retry(async (abort) => {
            await failing().catch(error => {
                if (error.message.match('2 < 3')) abort(error);
                throw error;
            });
        }, { retry: 5, timeout: 5 });
    }, new Error('2 < 3'));
});

test('Positive: stop retry if succed', async function () {
    let i = 0;

    function succed() {
        if (++i === 1) return 'OK';
        assert.fail('Should not be run more than once');
    }

    await helper(() => succed(), { retry: 5, timeout: 1 });
    await pause(100);
});
