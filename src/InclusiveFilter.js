/* eslint-disable censor/no-swear */
export class InclusiveFilter {
    constructor({
        include,
        exclude,
        pass = true, // filter is empty
        conflict = true, // a value is both included and excluded
        neither = false// a value is neither included nor excluded
    }) {
        this._include = include;
        this._exclude = exclude;

        this._conflict = conflict;
        this._neither = neither;
        this._pass = pass;
    }

    run(value) {
        if (!this._include && !this._exclude) return this._pass;

        if (!this._include) return !this._exclude.includes(value);
        if (!this._exclude) return this._include.includes(value);

        const isIncluded = this._include.includes(value);
        const isExcluded = this._exclude.includes(value);

        if (isIncluded && !isExcluded) return true;
        if (isExcluded && !isIncluded) return false;

        if (isIncluded && isExcluded) return this._conflict;

        return this._neither; // !isIncluded && !isExcluded
    }
}
