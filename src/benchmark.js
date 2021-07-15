/* eslint-disable node/no-unsupported-features/node-builtins,node/no-unsupported-features/es-builtins */
import { isFunction } from './checkType';

const NS_PER_MS = 1e6;
const FRACTION_DIGITS = 5;

function processGetBenchmark(start) {
    const end = process.hrtime.bigint();
    const nsDiff = end - start;
    const msTime = nsDiff  / BigInt(NS_PER_MS);

    return Number(msTime).toFixed(FRACTION_DIGITS);
}

function processStartBenchmark() {
    return process.hrtime.bigint();
}

function performanceStartBenchmark() {
    performance.now();

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

const useProcess = (typeof process !== 'undefined') && isFunction(process?.hrtime?.bigint);
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
