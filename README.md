# myrmidon

package myrmidon provides list of common utilties for comfortable work with js projects.

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
    -   [custom](#custom)

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

-   [**isString**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isstring) - determines whether the value is string
-   [**isClass**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isclass) - determines whether the value is class
-   [**isFunction**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isfunction) - determines whether the value is function
-   [**isObject**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isobject) - determines whether the value is an object
-   [**isArray**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isarray) - determines whether the value is array
-   [**isPromise**](https://myrmidonjs.readthedocs.io/en/latest/reference/#ispromise) - determines whether the value is promise
-   [**isValue**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isvalue) - determines whether the value is set
-   [**isNumber**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isnumber) - determines whether the value is Number
-   [**isBoolean**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isboolean) - determines whether the value is Boolean
-   [**isStream**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isstream) - determines whether the value is Stream
-   [**isGetter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isgetter) - determines whether the value is function getter

### array

helps to work with js arrays

-   [**toArray**](https://myrmidonjs.readthedocs.io/en/latest/reference/#toarray) - transforms any value to Array
-   [**uniqueFilter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#uniquefilter) - generates filter function, that leaves only unique items
-   [**uniqueIdFilter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#uniqueidfilter) - filter function, that leaves only unique items with same id property
-   [**uniqueIdenticFilter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#uniqueidenticfilter) - filter function, that leaves only identicly unique items (same by ===)
-   [**existanceFilter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#existancefilter) - filter function, that leaves only exited values
-   [**passFilter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#passfilter) - filter function, that leaves all items
-   [**flatten**](https://myrmidonjs.readthedocs.io/en/latest/reference/#flatten) - flattens array
-   [**isUnique**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isunique) - checks are all items of array unique
-   [**last**](https://myrmidonjs.readthedocs.io/en/latest/reference/#last) - get last element of an array

### object

-   [**cleanUndefined**](https://myrmidonjs.readthedocs.io/en/latest/reference/#cleanundefined) - cleans object from undefined fields recursievly
-   [**clone**](https://myrmidonjs.readthedocs.io/en/latest/reference/#clone) - create deep clone of object
-   [**isEmpty**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isempty) - determines whether the object or array is empty

### benchmark

helps to benchmark execution time

-   [**getBenchmark**](https://myrmidonjs.readthedocs.io/en/latest/reference/#getbenchmark) - get result of benchmark counting
-   [**startBenchmark**](https://myrmidonjs.readthedocs.io/en/latest/reference/#startbenchmark) - starts benchmark counting

### custom

-   [**retry**](https://myrmidonjs.readthedocs.io/en/latest/reference/#retry) - Retrying function calls on errors
-   [**getProp**](https://myrmidonjs.readthedocs.io/en/latest/reference/#getprop) - Get nested property of object
-   [**fill**](https://myrmidonjs.readthedocs.io/en/latest/reference/#fill) - Fills string template with specified data

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

[npm]: https://www.npmjs.com/package/myrmidon

[github]: https://github.com/pustovitDmytro/myrmidon
