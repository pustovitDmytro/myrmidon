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

function performanceStartBenchmark() {
    return performance.now();
}

function performanceGetBenchmark(time) {
    const diff = performance.now() - time;

    return diff.toFixed(FRACTION_DIGITS);
}

function fallbackStartBenchmark() {
    return new Date();
}

function fallbackGetBenchmark(time) {
    const diff = Date.now() - time;

    return diff.toFixed(FRACTION_DIGITS);
}

const useProcess = (typeof process !== 'undefined') && isFunction(process?.hrtime);
const usePerformance = (typeof performance !== 'undefined') && isFunction(performance?.now);

/**
 * get result of benchmark counting
 * @param {any} x identifier of count start (result of startBenchmark)
 * @returns {string} execution time in ms
 */

export const getBenchmark = useProcess && processGetBenchmark
|| usePerformance && performanceGetBenchmark
|| fallbackGetBenchmark;

/**
 * starts benchmark counting
 * @returns {any} identifier of count start
 */
export const startBenchmark = useProcess && processStartBenchmark
|| usePerformance && performanceStartBenchmark
|| fallbackStartBenchmark;
