import { isBoolean } from 'tests/entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(isBoolean);

suite('CheckTypes: isBoolean');

test('Positive: isBoolean with boolean input @examples', () => {
    tester.test(true, true);
    tester.test(false, true);
    tester.test(new Boolean(true), true);
});

test('Negative: isBoolean with no-boolean input @examples', () => {
    tester.test('14', false);
    tester.test('', false);
    tester.test(NaN, false);
    tester.test(null, false);
    tester.test(undefined, false);
});

after(async () => {
    // console.log('after', this);
});

