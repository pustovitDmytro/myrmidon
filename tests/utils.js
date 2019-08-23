import { assert } from 'chai';

export class FunctionTester {
    constructor(func) {
        this.function = func;
    }
    testOne(input, output, message) {
        const got = this.function(input);

        assert.equal(got, output, message);
    }
    testMany(inputs, ...args) {
        return inputs.map(input => this.testOne(input, ...args));
    }
}
