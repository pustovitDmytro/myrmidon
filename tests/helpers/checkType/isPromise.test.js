import { isPromise } from '../../entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(isPromise);

suite('CheckTypes: isPromise');

test('Positive: isPromise with promise input @example', () => {
    tester.test(new Promise(() => {}), true);
});

test('Negative: isPromise with no-promise input @example', () => {
    tester.test(13, false);
    tester.test(true, false);
    tester.test(new Set(), false);
});

test('Negative: isPromise with empty input @example', () => {
    tester.test(null, false);
    tester.test(undefined, false);
    tester.test(0, false);
    tester.test('', false);
    tester.test(false, false);
});

after(async () => {
    // console.log('after', this);
});

