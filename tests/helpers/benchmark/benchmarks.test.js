import { assert } from 'chai';
import {
    getBenchmark,
    startBenchmark
} from '../../entry';
import { sleep } from '../../utils';

suite('Benchmarks #nodejs');

test('Positive: min measurable time', () => {
    const time = startBenchmark();
    const benchmark = getBenchmark(time);

    assert.isString(benchmark);
    assert.isAtMost(+benchmark, 1);
});

test('Positive: measure time', async () => {
    const time = startBenchmark();

    await sleep(20);
    const benchmark = getBenchmark(time);

    assert.isString(benchmark);
    assert.isAtLeast(+benchmark, 19);
});
