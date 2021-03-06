import fs from 'fs';
import path from 'path';
import { isStream } from 'tests/entry';
import { FunctionTester } from '../../utils';

const directory = path.join(__dirname, '../../mock/files/');
const tester = new FunctionTester(isStream);

suite('CheckTypes: isStream');

test('Positive: isStream with node fs streams input @example', () => {
    tester.test(fs.createReadStream(path.join(directory, 'input.txt')), true);
    tester.test(fs.createWriteStream(path.join(directory, 'out.txt')), true);
});

test('Negative: isStream with no-streams input @example', () => {
    tester.test(14, false);
    tester.test('sdsdsd', false);
    tester.test(() => {}, false);
    tester.test(class A {}, false);
    tester.test(undefined, false);
});

after(async () => {
    // console.log('after', this);
});

