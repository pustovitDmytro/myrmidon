import { assert } from 'chai';

export class FunctionTester {
    constructor(func) {
        this.func = func;
    }
    test(input, output, message) {
        const got = this.func(input);
        const errMessage = message || `${input} => ${output}`;

        assert.deepEqual(got, output, errMessage);
    }
    testMany(inputs, ...args) {
        return inputs.map(input => this.test(input, ...args));
    }
}

export function requireFile(module) {
    delete require.cache[require.resolve(module)];

    const result =  require(module);

    delete require.cache[require.resolve(module)];

    return result;
}

export const sleep = time => new Promise(res => setTimeout(res, time));
