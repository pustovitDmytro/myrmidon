import fs from 'fs';
import path from 'path';
import { isStream } from 'tests/entry';
import { FunctionTester, testsRootFolder } from '../../Test';

const directory = path.join(testsRootFolder, 'mock/files/');
const tester = new FunctionTester(isStream);

suite('CheckTypes: isStream');

test('Positive: isStream with node fs streams input @example', function () {
    tester.test(fs.createReadStream(path.join(directory, 'input.txt')), true);
    tester.test(fs.createWriteStream(path.join(directory, 'out.txt')), true);
});

test('Negative: isStream with no-streams input @example', function () {
    tester.test(14, false);
    tester.test('sdsdsd', false);
    tester.test(() => {}, false);
    tester.test(class A {}, false);
    tester.test(undefined, false);
});

after(async function () {
    // console.log('after', this);
});

