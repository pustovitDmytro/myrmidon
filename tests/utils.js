import { assert } from 'chai';

export class FunctionTester {
    constructor(func) {
        this.func = func;
    }
    testOne(input, output, message) {
        const got = this.func(input);

        assert.deepEqual(got, output, message);
    }
    testMany(inputs, ...args) {
        return inputs.map(input => this.testOne(input, ...args));
    }
}
