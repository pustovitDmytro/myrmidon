import { isGetter } from 'tests/entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(isGetter);

suite('CheckTypes: isGetter');

class A {
    a() {}

    b = () => {}

    get c() {
        return 2;
    }

    d = 1
}
class X extends A {}
const x = new X();

test('Positive: isGetter @example', () => {
    tester.test(x, 'c', true);
});

test('Negative: isGetter @example', () => {
    tester.test(1, null, false);

    tester.test(x, 'a', false);
    tester.test(x, 'constructor', false);
    tester.test(x, 'd', false);
    tester.test(x, 'b', false);
});

after(async () => {
    // console.log('after', this);
});

