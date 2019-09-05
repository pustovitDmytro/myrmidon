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
