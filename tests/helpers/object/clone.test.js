import { clone } from '../../entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(clone);

suite('object: clone');

test('Positive: deep clone @example', function () {
    tester.test({ a: 1, b: { c: 'text' } }, { a: 1, b: { c: 'text' } });
});

after(async function () {
    // console.log('after', this);
});

