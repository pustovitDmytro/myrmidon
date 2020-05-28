import { inspect } from 'util';
import { assert } from 'chai';
/* eslint-disable prefer-arrow-callback */
import { createNamespace } from 'cls-hooked';
import uuid from 'uuid';
import fs from 'fs-extra';
import { parseScript } from 'esprima';
import * as myrmidon from 'tests/entry';
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
            const exapleIndex = EXAMPLES.filter(e => e.test === context.get('current').id).length;
            const ast = parseScript(context.get('current').body);
            const rootAst = ast.body.find(a => a.type === 'ExpressionStatement');

            const testFuncAst = rootAst.expression.body;
            const exampleSnippet = testFuncAst.body[exapleIndex];
            const exampleArguments = exampleSnippet.expression.arguments;
            const inputArguments = exampleArguments.slice(0, -1);
            const escodegen = require('escodegen');
            const rawInputArguments = inputArguments
                .map(literal => escodegen.generate(literal, { format: { compact: true } }));

            EXAMPLES.push({
                type     : 'FunctionTester',
                function : this.func.name,
                output   : inspect(output),
                input    : rawInputArguments,
                test     : context.get('current').id
            });
        }
    }
}

export async function SnippetTesterAsync(func, expected) {
    try {
        const result = await func(myrmidon);

        if (expected) {
            assert.deepEqual(result, expected);
        }
        if (saveExamles) {
            const ast = parseScript(func.toString());
            const testerFunc = ast.body.find(s => s.type === 'ExpressionStatement');
            const isMyrmydonPassed = testerFunc && testerFunc.expression.params[0].type === 'ObjectPattern';
            const helpers = isMyrmydonPassed
                ? testerFunc.expression
                    .params[0].properties.map(p => p.key.name)
                : [];
            const body = func.toString().replace(/\({[\s\S]+}\)\s=>\s{/, '() => {');
            const needAsync = body.includes('await');

            EXAMPLES.push({
                type      : 'SnippetTester',
                functions : helpers,
                output    : inspect(result),
                input     : needAsync ? `async ${body}` : body,
                test      : context.get('current').id
            });
        }
    } catch (error) {
        if (error.name !== 'AssertionError' && expected && expected instanceof Error) {
            assert.equal(error.message, expected.message);
            // TODO: save examples
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

