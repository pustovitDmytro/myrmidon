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

    -   [Functions:](#functions)

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

### Functions:

-   **isString** - determines whether the value is string
-   **isClass** - determines whether the value is class
-   **isFunction** - determines whether the value is function
-   **isObject** - determines whether the value is an object
-   **isArray** - determines whether the value is array
-   **isPromise** - determines whether the value is promise
-   **isValue** - determines whether the value is set
-   **isEmpty** - determines whether the object or array is empty
-   **toArray** - transforms any value to Array

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
