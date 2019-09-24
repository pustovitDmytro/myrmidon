import { isFunction } from './checkType';

const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;
const FRACTION_DIGITS = 5;

function processGetBenchmark(time) {
    const diff = process.hrtime(time);
    const msTime = (diff[0] * NS_PER_SEC + diff[1])  * MS_PER_NS;

    return msTime.toFixed(FRACTION_DIGITS);
}

function processStartBenchmark() {
    return process.hrtime();
}

/* istanbul ignore next */
function performanceStartBenchmark() {
    return performance.now();
}

/* istanbul ignore next */
function performanceGetBenchmark(time) {
    const diff = performance.now() - time;

    return diff.toFixed(FRACTION_DIGITS);
}

function fallbackStartBenchmark() {
    return new Date();
}

function fallbackGetBenchmark(time) {
    const diff = new Date() - time;

    return diff.toFixed(FRACTION_DIGITS);
}

const useProcess = (typeof process !== 'undefined') && isFunction(process?.hrtime);
const usePerformance = (typeof performance !== 'undefined') && isFunction(performance?.now);

export const getBenchmark = useProcess && processGetBenchmark
|| usePerformance && performanceGetBenchmark
|| fallbackGetBenchmark;

export const startBenchmark = useProcess && processStartBenchmark
|| usePerformance && performanceStartBenchmark
|| fallbackStartBenchmark;
