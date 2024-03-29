import { isFunction } from '../../entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(isFunction);

suite('CheckTypes: isFunction');

test('Positive: isFunction with function input @example', function () {
    tester.test(() => {}, true);
    tester.test(async () => {}, true);
});

test('Negative: isFunction with no-function input @example', function () {
    tester.test(13, false);
    tester.test(true, false);
    tester.test(new Set(), false);
});

test('Negative: isFunction with empty input @example', function () {
    tester.test(null, false);
    tester.test(undefined, false);
    tester.test(0, false);
    tester.test('', false);
    tester.test(false, false);
});

after(async function () {
    // console.log('after', this);
});

