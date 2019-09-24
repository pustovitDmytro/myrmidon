import path from 'path';
import { assert } from 'chai';
import { requireFile } from '../utils';

const benchmarkPath = path.join(__dirname, '../../src/benchmark.js');
const hrtime = process.hrtime;

process.hrtime = 0;
const {
    getBenchmark,
    startBenchmark
} = requireFile(benchmarkPath);

process.hrtime = hrtime;

const sleep = time => new Promise(res => setTimeout(res, time));

suite('Fallback benchmarks');

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

// test('Positive: fallback benchmark measure', async function () {
//     const hrtime = process.hrtime;


//     process.hrtime = 0;
//     console.log('reqire');
//     const fallback = require(process.env.ENTRY);

//     process.hrtime = hrtime;
//     const time = fallback.startBenchmark();

//     await sleep(10);
//     const benchmark = getBenchmark(time);

//     assert.isString(benchmark);
//     assert.isAtLeast(+benchmark, 10);
// });
