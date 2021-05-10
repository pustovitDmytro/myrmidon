import path from 'path';
import { assert } from 'chai';
import { load, sleep, testsRootFolder } from '../../Test';

const benchmarkPath = 'benchmark.js';
const polyfillPath = path.join(testsRootFolder, 'polyfills/performance.polyfill.js');
const hrtime = process.hrtime;
const performance = global.performance;

let getBenchmark;

let  startBenchmark;

suite('Performance benchmarks #browser');

before(() => {
    process.hrtime = 0;
    load(polyfillPath);
    const fallback = load(benchmarkPath);

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
    global.performance = performance;
    process.hrtime = hrtime;
});
