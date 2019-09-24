import path from 'path';
import { assert } from 'chai';
import { requireFile, sleep } from '../utils';

const benchmarkPath = path.join(__dirname, '../../src/benchmark.js');
const hrtime = process.hrtime;

let getBenchmark;

let  startBenchmark;

suite('Fallback benchmarks');

before(function () {
    process.hrtime = 0;
    const fallback = requireFile(benchmarkPath);

    getBenchmark = fallback.getBenchmark;
    startBenchmark = fallback.startBenchmark;
});

test('Positive: min measurable time', function () {
    const time = startBenchmark();
    const benchmark = getBenchmark(time);

    assert.isString(benchmark);
    assert.isAtMost(+benchmark, 1);
});

test('Positive: measure time', async function () {
    const time = startBenchmark();

    await sleep(20);
    const benchmark = getBenchmark(time);

    assert.isString(benchmark);
    assert.isAtLeast(+benchmark, 20);
});

after(async function () {
    process.hrtime = hrtime;
});
