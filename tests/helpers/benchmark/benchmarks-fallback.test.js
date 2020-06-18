import path from 'path';
import { assert } from 'chai';
import { requireFile, sleep } from '../../utils';

const benchmarkPath = path.join(__dirname, '../../../src/benchmark.js');
const hrtime = process.hrtime;

let getBenchmark;

let  startBenchmark;

suite('Fallback benchmarks');

before(() => {
    process.hrtime = 0;
    const fallback = requireFile(benchmarkPath);

    getBenchmark = fallback.getBenchmark;
    startBenchmark = fallback.startBenchmark;
});

test('Positive: min measurable time', () => {
    const time = startBenchmark();
    const benchmark = getBenchmark(time);

    assert.isString(benchmark);
    assert.isNumber(+benchmark);
});

test('Positive: measure time', async () => {
    const time = startBenchmark();

    await sleep(20);
    const benchmark = getBenchmark(time);

    assert.isString(benchmark);
    assert.isAtLeast(+benchmark, 19);
});

after(async () => {
    process.hrtime = hrtime;
});
