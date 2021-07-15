// import path from 'path';
import { assert } from 'chai';
import { load, sleep } from '../../Test';

const benchmarkPath = 'benchmark.js';
const hrtime = process.hrtime;
const performance = global.performance;

let getBenchmark;

let  startBenchmark;

suite('Fallback benchmarks');

before(function () {
    process.hrtime = 0;
    global.performance = null;

    const fallback = load(benchmarkPath, true);

    getBenchmark = fallback.getBenchmark;
    startBenchmark = fallback.startBenchmark;
});

test('Positive: min measurable time', function () {
    const time = startBenchmark();
    const benchmark = getBenchmark(time);

    assert.isString(benchmark);
    assert.isNumber(+benchmark);
});

test('Positive: measure time', async function () {
    const time = startBenchmark();

    await sleep(20);
    const benchmark = getBenchmark(time);

    assert.isString(benchmark);
    assert.isAtLeast(+benchmark, 19);
});

after(async function () {
    process.hrtime = hrtime;
    global.performance = performance;
});
