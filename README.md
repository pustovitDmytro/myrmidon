# myrmidon

package myrmidon provides a list of common utilities for comfortable work with js projects.

[![Version][badge-vers]][npm]
[![Bundle size][npm-size-badge]][npm-size-url]
[![Downloads][npm-downloads-badge]][npm]

[![CodeFactor][codefactor-badge]][codefactor-url]
[![SonarCloud][sonarcloud-badge]][sonarcloud-url]
[![Codacy][codacy-badge]][codacy-url]
[![Total alerts][lgtm-alerts-badge]][lgtm-alerts-url]
[![Language grade][lgtm-lg-badge]][lgtm-lg-url]
[![Scrutinizer][scrutinizer-badge]][scrutinizer-url]

[![Dependencies][badge-deps]][npm]
[![Vulnerabilities][badge-vuln]](https://snyk.io/)
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![License][badge-lic]][github]

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


Package is [continuously tested][appveyor-url] on darwin, linux, win32 platforms. All active and maintenance [LTS](https://nodejs.org/en/about/releases/) node releases are supported.
## Installation

To install the library, run the following command

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
-   [**isRegexp**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isregexp) - determines whether the value is regualr expression

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
-   [**searchFor**](https://myrmidonjs.readthedocs.io/en/latest/reference/#searchfor) - Search all occurrences of pattern in text

## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions. Read [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

[npm]: https://www.npmjs.com/package/myrmidon
[github]: https://github.com/pustovitDmytro/myrmidon
[coveralls]: https://coveralls.io/github/pustovitDmytro/myrmidon?branch=master
[badge-deps]: https://img.shields.io/david/pustovitDmytro/myrmidon.svg
[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/myrmidon.svg?style=popout
[badge-vers]: https://img.shields.io/npm/v/myrmidon.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/myrmidon.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/myrmidon/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/myrmidon?branch=master

[tests-badge]: https://img.shields.io/circleci/build/github/pustovitDmytro/myrmidon
[tests-url]: https://app.circleci.com/pipelines/github/pustovitDmytro/myrmidon

[codefactor-badge]: https://www.codefactor.io/repository/github/pustovitdmytro/myrmidon/badge
[codefactor-url]: https://www.codefactor.io/repository/github/pustovitdmytro/myrmidon

[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/pustovitDmytro/myrmidon

[scrutinizer-badge]: https://scrutinizer-ci.com/g/pustovitDmytro/myrmidon/badges/quality-score.png?b=master
[scrutinizer-url]: https://scrutinizer-ci.com/g/pustovitDmytro/myrmidon/?branch=master

[lgtm-lg-badge]: https://img.shields.io/lgtm/grade/javascript/g/pustovitDmytro/myrmidon.svg?logo=lgtm&logoWidth=18
[lgtm-lg-url]: https://lgtm.com/projects/g/pustovitDmytro/myrmidon/context:javascript

[lgtm-alerts-badge]: https://img.shields.io/lgtm/alerts/g/pustovitDmytro/myrmidon.svg?logo=lgtm&logoWidth=18
[lgtm-alerts-url]: https://lgtm.com/projects/g/pustovitDmytro/myrmidon/alerts/

[codacy-badge]: https://app.codacy.com/project/badge/Grade/8667aa23afaa4725854f098c4b5e8890
[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/myrmidon/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pustovitDmytro/myrmidon&amp;utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_myrmidon&metric=alert_status
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_myrmidon

[npm-downloads-badge]: https://img.shields.io/npm/dw/myrmidon
[npm-size-badge]: https://img.shields.io/bundlephobia/min/myrmidon
[npm-size-url]: https://bundlephobia.com/result?p=myrmidon

[appveyor-badge]: https://ci.appveyor.com/api/projects/status/voirgvgkn97pd1wq/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/pustovitDmytro/myrmidon/branch/master

