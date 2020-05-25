import path from 'path';
import { assert } from 'chai';
/* eslint-disable prefer-arrow-callback */
import { createNamespace } from 'cls-hooked';
import uuid from 'uuid';
import fs from 'fs-extra';
import { saveExamles } from './constants';

const context = createNamespace('test');
const EXAMPLES = [];
const PRINT_CASES = [];

if (saveExamles) {
    beforeEach(function setClsFromContext() {
        const old = this.currentTest.fn;

        this.currentTest._TRACE_ID = uuid.v4();
        this.currentTest.fn = function clsWrapper() {
            return new Promise((res, rej) => {
                context.run(() => {
                    context.set('current', {
                        test  : this.test.title,
                        suite : this.test.parent.title,
                        body  : this.test.body,
                        id    : this.test._TRACE_ID
                    });

                    Promise.resolve(old.apply(this, arguments))
                        .then(res)
                        .catch(rej);
                });
            });
        };
    });

    afterEach(async function writeExamples() {
        const examples = EXAMPLES.filter(e => e.test === this.currentTest._TRACE_ID);

        if (examples.length) {
            PRINT_CASES.push({
                testID : this.currentTest._TRACE_ID,
                test   : this.currentTest.title,
                suite  : this.currentTest.parent.title,
                examples
            });
            await fs.writeFile(saveExamles, JSON.stringify(PRINT_CASES));
        }
    });
}

export class FunctionTester {
    constructor(func) {
        this.func = func;
    }
    test(...args) {
        const [ output, ...revinput ] = args.reverse();
        const input = revinput.reverse();
        const got = this.func(...input);
        const errMessage = `${input.join(',')} => ${output}`;

        assert.deepEqual(got, output, errMessage);
        if (saveExamles) {
            const argsRegexp = /\.test\(([\s\S]+?),[^,]+\);/gm;
            const match = argsRegexp.exec(context.get('current').body);

            EXAMPLES.push({
                type     : 'FunctionTester',
                function : this.func.name,
                output,
                input    : match[1].trim(),
                test     : context.get('current').id
            });
        }
    }
}

export async function SnippetTesterAsync(func, expected) {
    try {
        const result = await func();

        if (expected) {
            assert.deepEqual(result, expected);
        }
    } catch (error) {
        if (error.name !== 'AssertionError' && expected && expected instanceof Error) {
            assert.equal(error.message, expected.message);
        } else {
            throw error;
        }
    }
}

export function requireFile(module) {
    delete require.cache[require.resolve(module)];

    const result =  require(module);

    delete require.cache[require.resolve(module)];

    return result;
}

export const sleep = time => new Promise(res => setTimeout(res, time));
