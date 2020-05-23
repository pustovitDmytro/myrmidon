import { assert } from 'chai';

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
    }
}

export function SnippetTester(func, expected) {
    const result = func();

    if (expected) {
        assert.deepEqual(result, expected);
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
