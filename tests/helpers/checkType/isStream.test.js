import fs from 'fs';
import path from 'path';
import { isStream } from 'tests/entry';
import { FunctionTester } from '../../utils';

const mock = path.join(__dirname, '../../mock/files/');
const tester = new FunctionTester(isStream);

suite('CheckTypes: isStream');

test('Positive: isStream with node fs streams input @examples', () => {
    tester.test(fs.createReadStream(path.join(mock, 'input.txt')), true);
    tester.test(fs.createWriteStream(path.join(mock, 'out.txt')), true);
});

test('Negative: isStream with no-streams input @examples', () => {
    tester.test(14, false);
    tester.test('sdsdsd', false);
    tester.test(() => {}, false);
    tester.test(class A {}, false);
    tester.test(undefined, false);
});

after(async () => {
    // console.log('after', this);
});

