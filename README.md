# 

[![Version][badge-vers]][npm]
[![Dependencies][badge-deps]][npm]
[![Vulnerabilities][badge-vuln]](https://snyk.io/)
[![Build Status][badge-tests]](https://travis-ci.org/pustovitDmytro/myrmidon)
[![Coverage Status][badge-coverage]](https://coveralls.io/github/pustovitDmytro/myrmidon?branch=master)
[![License][badge-lic]][github]

[badge-deps]: https://img.shields.io/david/pustovitDmytro/myrmidon.svg

[badge-tests]: https://img.shields.io/travis/pustovitDmytro/myrmidon.svg

[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/myrmidon.svg?style=popout

[badge-vers]: https://img.shields.io/npm/v/myrmidon.svg

[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/myrmidon.svg

[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/myrmidon/badge.svg?branch=master

## Table of Contents

-   [Requirements](#requirements)

-   [Installation](#installation)

-   [Usage](#usage)

    -   [checkType](#checktype)
    -   [array](#array)
    -   [object](#object)
    -   [benchmark](#benchmark)

-   [Contribute](#contribute)

## Requirements

To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

-   node `6.0+`
-   npm `3.0+`

## Installation

To install the library run following command

```bash
  npm i --save myrmidon
```

## Usage

Read full [docs](https://myrmidonjs.readthedocs.io/en/latest/reference/)

### checkType

helps to indicate type of any value

-   **isString** - determines whether the value is string
-   **isClass** - determines whether the value is class
-   **isFunction** - determines whether the value is function
-   **isObject** - determines whether the value is an object
-   **isArray** - determines whether the value is array
-   **isPromise** - determines whether the value is promise
-   **isValue** - determines whether the value is set
-   **isNumber** - determines whether the value is Number
-   **isBoolean** - determines whether the value is Boolean
-   **isStream** - determines whether the value is Stream
-   **isGetter** - determines whether the value is function getter

### array

helps to work with js arrays

-   **toArray** - transforms any value to Array
-   **uniqueFilter** - generates filter function, that leaves only unique items
-   **uniqueIdFilter** - filter function, that leaves only unique items with same id property
-   **uniqueIdenticFilter** - filter function, that leaves only identicly unique items (same by ===)
-   **existanceFilter** - filter function, that leaves only exited values
-   **passFilter** - filter function, that leaves all items
-   **flatten** - flattens array
-   **isUnique** - checks are all items of array unique
-   **last** - get last element of an array

### object

-   **cleanUndefined** - cleans object from undefined fields recursievly
-   **clone** - create deep clone of object
-   **isEmpty** - determines whether the object or array is empty

### benchmark

helps to benchmark execution time

-   **getBenchmark** - get result of benchmark counting
-   **startBenchmark** - starts benchmark counting

## Contribute

Make the changes to the code and tests and then commit to your branch. Be sure to follow the commit message conventions.

Commit message summaries must follow this basic format:

      Tag: Message (fixes #1234)

The Tag is one of the following:

-   **Fix** - for a bug fix.
-   **Update** - for a backwards-compatible enhancement.
-   **Breaking** - for a backwards-incompatible enhancement.
-   **Docs** - changes to documentation only.
-   **Build** - changes to build process only.
-   **New** - implemented a new feature.
-   **Upgrade** - for a dependency upgrade.
-   **Chore** - for tests, refactor, style, etc.

The message summary should be a one-sentence description of the change. The issue number should be mentioned at the end.

[npm]: https://www.npmjs.com/package/

[github]: https://github.com/pustovitDmytro/
