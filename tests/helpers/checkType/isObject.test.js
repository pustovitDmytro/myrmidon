import { isObject } from '../../entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(isObject);

suite('CheckTypes: isObject');

test('Positive: isObject with object input @examples', () => {
    tester.test({}, true);
    tester.test(new Object(), true); // eslint-disable-line no-new-object
});

test('Negative: isObject with no-object input @examples', () => {
    tester.test(13, false);
    tester.test(true, false);
    tester.test(new Set(), false);
});

test('Negative: isObject with empty input @examples', () => {
    tester.test(null, false);
    tester.test(undefined, false);
    tester.test(0, false);
    tester.test('', false);
    tester.test(false, false);
});

after(async () => {
    // console.log('after', this);
});

