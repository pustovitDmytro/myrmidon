import { isNumber, isObject, isFunction } from './checkType';
import { random } from './random';

const abortedKey = Symbol('myrmidon_retry_aborted');

function abort(error = new Error('Unknown Retry Abortion')) {
    error[abortedKey] = true;
    throw error;
}

// timeout : /number/{min, max, factor, randomize}/function(retryAttempt) Exponential Backoff
function calculateTimeout(opts, attempt = 0) {
    if (isNumber(opts)) return opts;
    if (isFunction(opts)) return opts(attempt);
    if (isObject(opts)) {
        const rand = opts.randomize ? random.uniform(0.5, 2) : 1;

        return Math.min(rand * opts.min * Math.pow(opts.factor || 2, attempt), opts.max);
    }
}

export function retry(retrier, { onRetry, retries = 10, timeout = 100 } = {}) {
    function onError(err, iter, rej) {
        if (onRetry) onRetry(err, iter, abortedKey);
        if (err[abortedKey]) rej(err);
        if (iter === retries) throw err;
    }

    return new Promise((res, rej) => {
        function attempt(iter) {
            try {
                const val = retrier(abort, iter);

                Promise.resolve(val)
                    .then(res)
                    .catch((err) => onError(err, iter, rej));
            } catch (err) {
                onError(err, iter, rej);
            }
            setTimeout(() => attempt(iter + 1), calculateTimeout(timeout, iter + 1));
        }
        attempt(0);
    });
}

export function getProp(obj, path, { delimeter = '.' } = {}) {
    return path.split(delimeter).reduce((accum, pathElem) => {
        try {
            return accum[pathElem];
        } catch (error) {
            return null;
        }
    }, obj);
}

export function fill(template, data, { delimiters = [ '{', '}' ], regExp } = {}) {
    const regexp = regExp || new RegExp(`${delimiters[0]}(.+?)${delimiters[1]}`, 'g');

    let result;

    let filled = template;

    while ((result = regexp.exec(template)) !== null) { // eslint-disable-line  no-cond-assign
        const path = result[1].trim();

        if (path) {
            const value = getProp(data, path) || '';

            filled = filled.replace(result[0], value);
        }
    }

    return filled;
}
