## array

**direct import**:

```javascript
    import * as helpers from 'myrmidon/array'
```

### toArray

function:
transforms any value to Array

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/array.js#L8)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/array/toArray.test.js)

**Parameters**

    - `value` **any** any array or primitive for examination

**Returns**

Returns **array** \[] if no value passed, value if it is Array and \[value] in other cases

**Examples**
empty value  *(positive)*

```javascript
import { toArray } from 'myrmidon';

toArray(null); // []

toArray(); // []

toArray([]); // []

toArray(''); // [ '' ]

toArray(0); // [ 0 ]


```

### uniqueFilter

function:
generates filter function, that leaves only unique items

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/array.js#L19)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/array/uniqueFilter.test.js)

**Parameters**

    - `isEqual` **function** equality function which receives 2 elements to compare, should return true if elements are equal

**Returns**

Returns **function** filter function, that leaves only unique items

**Examples**
uniqueFilter with strict equality function  *(positive)*

```javascript
import { uniqueFilter } from 'myrmidon';

() => {
    const leaveUnique = uniqueFilter((a, b) => a === b);

    return [ 1, 2, 3, 3, 2, 5 ].filter(leaveUnique);
}; // [ 1, 2, 3, 5 ]


```

### uniqueIdFilter

const:
filter function, that leaves only unique items with same id property

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/array.js#L34)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/array/uniqueIdFilter.test.js)

**Examples**
uniqueIdFilter for array of users  *(positive)*

```javascript
import { uniqueIdFilter } from 'myrmidon';

() => {
    const users = [ { id: 1, name: 'Maud Kim' }, { id: 2, name: 'Bettie Henderson' }, { id: 3, name: 'Estella Snyder' }, { id: 1, name: 'Maud Kim' } ];

    return users.filter(uniqueIdFilter);
}; // [ { id: 1, name: 'Maud Kim' }, { id: 2, name: 'Bettie Henderson' }, { id: 3, name: 'Estella Snyder' } ]


```

### uniqueIdenticFilter

const:
filter function, that leaves only identicly unique items (same by ===)

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/array.js#L41)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/array/uniqueIdenticFilter.test.js)

**Examples**
uniqueIdenticFilter for array of numbers  *(positive)*

```javascript
import { uniqueIdenticFilter } from 'myrmidon';

() => {
    const items = [ 1, 2, '4', 3, 2, 1, 4, '2', 3, 5 ];

    return items.filter(uniqueIdenticFilter);
}; // [ 1, 2, '4', 3, 4, '2', 5 ]

() => {
    const items = [ 6, 7 ];

    return items.filter(uniqueIdenticFilter);
}; // [ 6, 7 ]


```

### existanceFilter

const:
filter function, that leaves only exited values

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/array.js#L48)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/array/existanceFilter.test.js)

**Examples**
existanceFilter  *(positive)*

```javascript
import { existanceFilter } from 'myrmidon';

() => {
    const items = [ 1, 2, null, 0, undefined, 3, 5 ];

    return items.filter(existanceFilter);
}; // [ 1, 2, 0, 3, 5 ]


```

### passFilter

const:
filter function, that leaves all items

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/array.js#L55)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/array/passFilter.test.js)

**Examples**
passFilter  *(positive)*

```javascript
import { passFilter } from 'myrmidon';

() => {
    const items = [ 1, 2, null, 0, undefined, 3, 5 ];

    return items.filter(passFilter);
}; // [ 1, 2, null, 0, undefined, 3, 5 ]


```

### flatten

function:
flattens array

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/array.js#L62)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/array/flatten.test.js)

**Parameters**

    - `any` **array** array with nested arrays

**Returns**

Returns **array** flattened array

**Examples**
flatten  *(positive)*

```javascript
import { flatten } from 'myrmidon';

flatten([ 1, 2, [ 'a', 'b', [ 'c' ] ], 0 ]); // [ 1, 2, 'a', 'b', 'c', 0 ]


```

### isUnique

function:
checks are all items of array unique

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/array.js#L78)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/array/isUnique.test.js)

**Parameters**

    - `any` **array** array
    - `settings` **object** method configuration
    - `settings.field` **string** property to treat as unique value
    - `settings.ignoreEmpty` **boolean** if set, empty values will be ignored

**Returns**

Returns **array** flattened array

**Examples**
isUnique  *(positive)*

```javascript
import { isUnique } from 'myrmidon';

isUnique([ 1, 2, 3, 4, 5 ]); // true

isUnique([ 1, 2, null, null, 3, 4, 5 ], { ignoreEmpty: true }); // true

isUnique([ { id: 1 }, { id: 2 }, null, { id: 5 } ], { ignoreEmpty: true, field: 'id' }); // true


```

isUnique  *(negative)*

```javascript
import { isUnique } from 'myrmidon';

isUnique([ 1, 2, 3, 2, 4, 5 ]); // false


```

### last

function:
get last element of an array

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/array.js#L97)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/array/last.test.js)

**Parameters**

    - `any` **array** array

**Returns**

Returns **any** last array element

**Examples**
last  *(positive)*

```javascript
import { last } from 'myrmidon';

last([ 1, 2, 3, 4, 5 ]); // 5


```

## checkType

**direct import**:

```javascript
    import * as helpers from 'myrmidon/checkType'
```

### isString

function:
determines whether the value is string

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L8)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/checkType/isString.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is string, false otherwise

**Examples**
isString with string input  *(positive)*

```javascript
import { isString } from 'myrmidon';

isString(''); // true

isString('abcd'); // true

isString('34'); // true

isString(new String(19)); // true

isString('multiline \n text with \ttabs'); // true


```

isString with no-string input  *(negative)*

```javascript
import { isString } from 'myrmidon';

isString(13); // false

isString(true); // false

isString(new Set()); // false


```

isString with empty input  *(negative)*

```javascript
import { isString } from 'myrmidon';

isString(null); // false

isString(); // false

isString(0); // false

isString(''); // true

isString(false); // false


```

### isClass

function:
determines whether the value is class

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L17)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/checkType/isClass.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is class, false otherwise

**Examples**
isClass with class input  *(positive)*

```javascript
import { isClass } from 'myrmidon';

isClass(class A {}); // true


```

isClass with no-class input  *(negative)*

```javascript
import { isClass } from 'myrmidon';

isClass(13); // false

isClass(true); // false

isClass(new Set()); // false

isClass(() => {}); // false


```

isClass with empty input  *(negative)*

```javascript
import { isClass } from 'myrmidon';

isClass(null); // false

isClass(); // false

isClass(0); // false

isClass(false); // false


```

### isFunction

function:
determines whether the value is function

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L26)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/checkType/isFunction.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is function, false otherwise

**Examples**
isFunction with function input  *(positive)*

```javascript
import { isFunction } from 'myrmidon';

isFunction(() => {}); // true

isFunction(async () => {}); // true


```

isFunction with no-function input  *(negative)*

```javascript
import { isFunction } from 'myrmidon';

isFunction(13); // false

isFunction(true); // false

isFunction(new Set()); // false


```

isFunction with empty input  *(negative)*

```javascript
import { isFunction } from 'myrmidon';

isFunction(null); // false

isFunction(); // false

isFunction(0); // false

isFunction(''); // false

isFunction(false); // false


```

### isObject

function:
determines whether the value is an object

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L35)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/checkType/isObject.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is an object, false otherwise

**Examples**
isObject with object input  *(positive)*

```javascript
import { isObject } from 'myrmidon';

isObject({}); // true

isObject(new Object()); // true


```

isObject with no-object input  *(negative)*

```javascript
import { isObject } from 'myrmidon';

isObject(13); // false

isObject(true); // false

isObject(new Set()); // false


```

isObject with empty input  *(negative)*

```javascript
import { isObject } from 'myrmidon';

isObject(null); // false

isObject(); // false

isObject(0); // false

isObject(''); // false

isObject(false); // false


```

### isArray

function:
determines whether the value is array

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L44)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is array, false otherwise

### isPromise

function:
determines whether the value is promise

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L53)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/checkType/isPromise.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is promise, false otherwise

**Examples**
isPromise with promise input  *(positive)*

```javascript
import { isPromise } from 'myrmidon';

isPromise(new Promise(() => {})); // true


```

isPromise with no-promise input  *(negative)*

```javascript
import { isPromise } from 'myrmidon';

isPromise(13); // false

isPromise(true); // false

isPromise(new Set()); // false


```

isPromise with empty input  *(negative)*

```javascript
import { isPromise } from 'myrmidon';

isPromise(null); // false

isPromise(); // false

isPromise(0); // false

isPromise(''); // false

isPromise(false); // false


```

### isValue

function:
determines whether the value is set

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L62)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** false if x is null or undefined, true otherwise

### isNumber

function:
determines whether the value is Number

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L71)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/checkType/isNumber.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is number, false otherwise

**Examples**
isNumber with number input  *(positive)*

```javascript
import { isNumber } from 'myrmidon';

isNumber(1); // true

isNumber(-5); // true

isNumber(0); // true


```

isNumber with no-number input  *(negative)*

```javascript
import { isNumber } from 'myrmidon';

isNumber('14'); // false

isNumber(''); // false

isNumber(Number.NaN); // false

isNumber(null); // false

isNumber(); // false


```

### isBoolean

function:
determines whether the value is Boolean

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L80)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/checkType/isBoolean.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is boolean, false otherwise

**Examples**
isBoolean with boolean input  *(positive)*

```javascript
import { isBoolean } from 'myrmidon';

isBoolean(true); // true

isBoolean(false); // true

isBoolean(new Boolean(true)); // true


```

isBoolean with no-boolean input  *(negative)*

```javascript
import { isBoolean } from 'myrmidon';

isBoolean('14'); // false

isBoolean(''); // false

isBoolean(Number.NaN); // false

isBoolean(null); // false

isBoolean(); // false


```

### isStream

function:
determines whether the value is Stream

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L90)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/checkType/isStream.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is Stream, false otherwise

**Examples**
isStream with node fs streams input  *(positive)*

```javascript
import { isStream } from 'myrmidon';

isStream(fs.createReadStream(path.join(directory, 'input.txt'))); // true

isStream(fs.createWriteStream(path.join(directory, 'out.txt'))); // true


```

isStream with no-streams input  *(negative)*

```javascript
import { isStream } from 'myrmidon';

isStream(14); // false

isStream('sdsdsd'); // false

isStream(() => {}); // false

isStream(class A {}); // false

isStream(); // false


```

### isGetter

function:
determines whether the value is function getter

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L100)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/checkType/isGetter.test.js)

**Parameters**

    - `x` **any** target class for examination
    - `name` **string** name of property to check is it getter in x

**Returns**

Returns **boolean** true if x is Getter, false otherwise

**Examples**
isGetter  *(positive)*

```javascript
import { isGetter } from 'myrmidon';

isGetter(x, 'c'); // true


```

isGetter  *(negative)*

```javascript
import { isGetter } from 'myrmidon';

isGetter(1, null); // false

isGetter(x, 'a'); // false

isGetter(x, 'constructor'); // false

isGetter(x, 'd'); // false

isGetter(x, 'b'); // false


```

### isRegexp

function:
determines whether the value is regualr expression

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/checkType.js#L111)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is regualr expression, false otherwise

## benchmark

**direct import**:

```javascript
    import * as helpers from 'myrmidon/benchmark'
```

### getBenchmark

const:
get result of benchmark counting

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/benchmark.js#L47)

**Returns**

Returns **string** execution time in ms

### startBenchmark

const:
starts benchmark counting

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/benchmark.js#L55)

**Returns**

Returns **any** identifier of count start

## custom

**direct import**:

```javascript
    import * as helpers from 'myrmidon/custom'
```

### retry

function:
Retrying function calls on errors

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/custom.js#L40)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/custom/retry.test.js)

**Parameters**

    - `retrier` **function** function (sync or async) that will be retried
    - `settings` **object** method configuration
    - `settings.onRetry` **** function that will be called on every retry attempt. Receives (error, iter, abortedKey). If error is thrown from onRetry, retrying is aborted.
    - `settings.retries` **** max retry times
    - `settings.timeout` **** timeout configuration. If number specifies time in ms, if object - specifies Exponential Backoff with properties min, max, factor, randomize

**Returns**

Returns **any** result of retrier function call

**Examples**
retry function calls  *(positive)*

```javascript
import { retry } from 'myrmidon';

() => {
    let i = 0;

    function failing() {
        if (++i < 3) throw new Error(`${i} < 3`);

        return i;
    }

    return retry(() => failing(), { retry: 5 });
}; // 3


```

retry async function with exponential backoff  *(positive)*

```javascript
import { retry } from 'myrmidon';

() => {
    return retry(async () => {
        return failing();
    }, { retry: 5, timeout: { min: 1, max: 100 } });
}; // 3


```

### getProp

function:
Get nested property of object

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/custom.js#L86)

**Parameters**

    - `obj` **object** input data
    - `path` **string** property path
    - `settings` **object** method configuration
    - `settings.delimeter` **** path delimeter notation

**Returns**

Returns **any** deep object property, or null if nothing found

### fill

function:
Fills string template with specified data

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/custom.js#L107)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/custom/fill.test.js)

**Parameters**

    - `template` **string** string template
    - `data` **object** input data
    - `settings` **object** method configuration
    - `settings.delimiters` **** literal delimiter flags
    - `settings.regExp` **** regexp to parse template (replaces full match with groups)

**Returns**

Returns **string** filled template

**Examples**
fill template  *(positive)*

```javascript
import { fill } from 'myrmidon';

fill('Hello {user.firstName} {user.lastName} {user.avatar.url}', { user: { firstName: 'Jason', lastName: 'Gregory' } }); // 'Hello Jason Gregory '


```

### searchFor

function:
Search all occurrences of pattern in text

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/custom.js#L135)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/custom/searchFor.test.js)

**Parameters**

    - `text` **string** where to search
    - `pattern` **** search pattern. If pattern is a non-RegExp object, it is implicitly converted to a RegExp by using new RegExp(pattern)

**Returns**

Returns **array** occurrences

**Examples**
search string for matches  *(positive)*

```javascript
```

no occurrences found  *(negative)*

```javascript
import { searchFor } from 'myrmidon';

searchFor('southern bell drink fresh list', /truth/g); // []


```

## object

**direct import**:

```javascript
    import * as helpers from 'myrmidon/object'
```

### cleanUndefined

function:
cleans object from undefined fields recursievly

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/object.js#L8)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/object/cleanUndefined.test.js)

**Parameters**

    - `obj` **Object** primitive for examination

**Returns**

Returns **Object** object without undefined fields

**Examples**
cleanUndefined  *(positive)*

```javascript
import { cleanUndefined } from 'myrmidon';

cleanUndefined({ x: { a: null, b: undefined }, c: 0 }); // { x: { a: null }, c: 0 }


```

### clone

function:
create deep clone of object

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/object.js#L28)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/object/clone.test.js)

**Parameters**

    - `x` **Object** input object

**Returns**

Returns **Object** deep copy

Note that object can't have circular references

**Examples**
deep clone  *(positive)*

```javascript
import { clone } from 'myrmidon';

clone({ a: 1, b: { c: 'text' } }); // { a: 1, b: { c: 'text' } }


```

### isEmpty

function:
determines whether the object or array is empty

[Source](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/src/object.js#L37)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/cf01509e29f908beddc6f1706a60502697ceac7b/tests/helpers/object/isEmpty.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is empty or false otherwise

**Examples**
isEmpty with empty input  *(positive)*

```javascript
import { isEmpty } from 'myrmidon';

isEmpty({}); // true


```

isEmpty with no-array input  *(negative)*

```javascript
import { isEmpty } from 'myrmidon';

isEmpty(13); // false

isEmpty(true); // false

isEmpty([ 0 ]); // false

isEmpty({ length: 0 }); // false


```

isEmpty with empty input  *(negative)*

```javascript
import { isEmpty } from 'myrmidon';

isEmpty(null); // false

isEmpty(); // false

isEmpty(0); // false

isEmpty(''); // false

isEmpty(false); // false


```
