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
[![Security][snyk-badge]][snyk-url]
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![FOSSA][fossa-badge]][fossa-url]
[![License][badge-lic]][github]

[npm]: https://www.npmjs.com/package/myrmidon

[github]: https://github.com/pustovitDmytro/myrmidon

[coveralls]: https://coveralls.io/github/pustovitDmytro/myrmidon?branch=master

[badge-deps]: https://img.shields.io/librariesio/release/npm/myrmidon.svg

[badge-vers]: https://img.shields.io/npm/v/myrmidon.svg

[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/myrmidon.svg

[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/myrmidon/badge.svg?branch=master

[url-coverage]: https://coveralls.io/github/pustovitDmytro/myrmidon?branch=master

[snyk-badge]: https://snyk-widget.herokuapp.com/badge/npm/myrmidon/badge.svg

[snyk-url]: https://snyk.io/advisor/npm-package/myrmidon

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

[codacy-badge]: https://app.codacy.com/project/badge/Grade/761f34369f4d49668775bca415c6c4f2

[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/myrmidon/dashboard?utm_source=github.com&utm_medium=referral&utm_content=pustovitDmytro/myrmidon&utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_myrmidon&metric=alert_status

[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_myrmidon

[npm-downloads-badge]: https://img.shields.io/npm/dw/myrmidon

[npm-size-badge]: https://img.shields.io/bundlephobia/min/myrmidon

[npm-size-url]: https://bundlephobia.com/result?p=myrmidon

[node-ver-test-badge]: https://github.com/pustovitDmytro/myrmidon/actions/workflows/npt.yml/badge.svg?branch=master

[node-ver-test-url]: https://github.com/pustovitDmytro/myrmidon/actions?query=workflow%3A%22Node.js+versions%22

[fossa-badge]: https://app.fossa.com/api/projects/custom%2B24828%2Fmyrmidon.svg?type=shield

[fossa-url]: https://app.fossa.com/projects/custom%2B24828%2Fmyrmidon?ref=badge_shield

## Table of Contents

*   [Requirements](#requirements)

*   [Installation](#installation)

*   [Usage](#usage)

    *   [array](#array)
    *   [benchmark](#benchmark)
    *   [checkType](#checktype)
    *   [custom](#custom)
    *   [math](#math)
    *   [object](#object)

*   [Contribute](#contribute)

## Requirements

[![Platform Status][node-ver-test-badge]][node-ver-test-url]

To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

*   node `>=10`
*   npm `>=6`

Package is [continuously tested][node-ver-test-url] on darwin, linux and win32 platforms. All active and maintenance [LTS](https://nodejs.org/en/about/releases/) node releases are supported.

## Installation

To install the library run following command

```bash
  npm i --save myrmidon
```

## Usage

Read full [docs](https://myrmidonjs.readthedocs.io/en/latest/reference/)

### array

*   [**toArray**](https://myrmidonjs.readthedocs.io/en/latest/reference/#toarray) - transforms any value to Array
*   [**uniqueFilter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#uniquefilter) - generates filter function, that leaves only unique items
*   [**uniqueIdFilter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#uniqueidfilter) - filter function, that leaves only unique items with same id property
*   [**uniqueIdenticFilter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#uniqueidenticfilter) - filter function, that leaves only identicly unique items (same by ===)
*   [**existanceFilter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#existancefilter) - filter function, that leaves only exited values
*   [**passFilter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#passfilter) - filter function, that leaves all items
*   [**flatten**](https://myrmidonjs.readthedocs.io/en/latest/reference/#flatten) - flattens array
*   [**isUnique**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isunique) - checks are all items of array unique
*   [**last**](https://myrmidonjs.readthedocs.io/en/latest/reference/#last) - get last element of an array

### benchmark

*   [**getBenchmark**](https://myrmidonjs.readthedocs.io/en/latest/reference/#getbenchmark) - get result of benchmark counting
*   [**startBenchmark**](https://myrmidonjs.readthedocs.io/en/latest/reference/#startbenchmark) - starts benchmark counting

### checkType

*   [**isString**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isstring) - determines whether the value is string
*   [**isClass**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isclass) - determines whether the value is class
*   [**isFunction**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isfunction) - determines whether the value is function
*   [**isObject**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isobject) - determines whether the value is an object
*   [**isArray**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isarray) - determines whether the value is array
*   [**isPromise**](https://myrmidonjs.readthedocs.io/en/latest/reference/#ispromise) - determines whether the value is promise
*   [**isValue**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isvalue) - determines whether the value is set
*   [**isNumber**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isnumber) - determines whether the value is Number
*   [**isBoolean**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isboolean) - determines whether the value is Boolean
*   [**isStream**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isstream) - determines whether the value is Stream
*   [**isGetter**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isgetter) - determines whether the value is function getter
*   [**isRegexp**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isregexp) - determines whether the value is regualr expression

### custom

*   [**retry**](https://myrmidonjs.readthedocs.io/en/latest/reference/#retry) - Retrying function calls on errors
*   [**getProp**](https://myrmidonjs.readthedocs.io/en/latest/reference/#getprop) - Get nested property of object
*   [**setProp**](https://myrmidonjs.readthedocs.io/en/latest/reference/#setprop) - Set nested property of object
*   [**fill**](https://myrmidonjs.readthedocs.io/en/latest/reference/#fill) - Fills string template with specified data
*   [**searchFor**](https://myrmidonjs.readthedocs.io/en/latest/reference/#searchfor) - Search all occurrences of pattern in text

### math

*   [**sum**](https://myrmidonjs.readthedocs.io/en/latest/reference/#sum) - Calculates sum of an array
*   [**mean**](https://myrmidonjs.readthedocs.io/en/latest/reference/#mean) - Calculates mean of an array
*   [**std**](https://myrmidonjs.readthedocs.io/en/latest/reference/#std) - Calculates standart deviation
*   [**quantile**](https://myrmidonjs.readthedocs.io/en/latest/reference/#quantile) - Calculates quantiles

### object

*   [**cleanUndefined**](https://myrmidonjs.readthedocs.io/en/latest/reference/#cleanundefined) - cleans object from undefined fields recursievly
*   [**clone**](https://myrmidonjs.readthedocs.io/en/latest/reference/#clone) - create deep clone of object
*   [**isEmpty**](https://myrmidonjs.readthedocs.io/en/latest/reference/#isempty) - determines whether the object or array is empty

## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions. Read [Contributing Guidelines](.github/CONTRIBUTING.md) for details.
