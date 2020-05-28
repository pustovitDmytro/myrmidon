## checkType

helps to indicate type of any value

**direct import**:

```javascript
    import * as helpers from 'myrmidon/checkType'
```

### isString

function:
determines whether the value is string

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/checkType.js#L3)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/checkType/isString.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is string, false otherwise

**Examples**
 isString with string input  _(positive)_

```javascript
import { isString } from 'myrmidon';

isString(''); // true
isString('abcd'); // true
isString('34'); // true
isString(new String(19)); // true
isString('multiline \n text with \ttabs'); // true

```

 isString with no-string input  _(negative)_

```javascript
import { isString } from 'myrmidon';

isString(13); // false
isString(true); // false
isString(new Set()); // false

```

 isString with empty input  _(negative)_

```javascript
import { isString } from 'myrmidon';

isString(null); // false
isString(undefined); // false
isString(0); // false
isString(''); // true
isString(false); // false

```

### isClass

function:
determines whether the value is class

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/checkType.js#L12)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/checkType/isClass.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is class, false otherwise

**Examples**
 isClass with class input  _(positive)_

```javascript
import { isClass } from 'myrmidon';

isClass(class A {}); // true

```

 isClass with no-class input  _(negative)_

```javascript
import { isClass } from 'myrmidon';

isClass(13); // false
isClass(true); // false
isClass(new Set()); // false

```

 isClass with empty input  _(negative)_

```javascript
import { isClass } from 'myrmidon';

isClass(null); // false
isClass(undefined); // false
isClass(0); // false
isClass(false); // false

```

### isFunction

function:
determines whether the value is function

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/checkType.js#L21)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/checkType/isFunction.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is function, false otherwise

**Examples**
 isFunction with function input  _(positive)_

```javascript
import { isFunction } from 'myrmidon';

isFunction(() => {}); // true
isFunction(async () => {}); // true

```

 isFunction with no-function input  _(negative)_

```javascript
import { isFunction } from 'myrmidon';

isFunction(13); // false
isFunction(true); // false
isFunction(new Set()); // false

```

 isFunction with empty input  _(negative)_

```javascript
import { isFunction } from 'myrmidon';

isFunction(null); // false
isFunction(undefined); // false
isFunction(0); // false
isFunction(''); // false
isFunction(false); // false

```

### isObject

function:
determines whether the value is an object

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/checkType.js#L30)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/checkType/isObject.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is an object, false otherwise

**Examples**
 isObject with object input  _(positive)_

```javascript
import { isObject } from 'myrmidon';

isObject({}); // true
isObject(new Object()); // true

```

 isObject with no-object input  _(negative)_

```javascript
import { isObject } from 'myrmidon';

isObject(13); // false
isObject(true); // false
isObject(new Set()); // false

```

 isObject with empty input  _(negative)_

```javascript
import { isObject } from 'myrmidon';

isObject(null); // false
isObject(undefined); // false
isObject(0); // false
isObject(''); // false
isObject(false); // false

```

### isArray

function:
determines whether the value is array

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/checkType.js#L39)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is array, false otherwise

### isPromise

function:
determines whether the value is promise

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/checkType.js#L48)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/checkType/isPromise.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is promise, false otherwise

**Examples**
 isPromise with promise input  _(positive)_

```javascript
import { isPromise } from 'myrmidon';

isPromise(new Promise(() => {})); // true

```

 isPromise with no-promise input  _(negative)_

```javascript
import { isPromise } from 'myrmidon';

isPromise(13); // false
isPromise(true); // false
isPromise(new Set()); // false

```

 isPromise with empty input  _(negative)_

```javascript
import { isPromise } from 'myrmidon';

isPromise(null); // false
isPromise(undefined); // false
isPromise(0); // false
isPromise(''); // false
isPromise(false); // false

```

### isValue

function:
determines whether the value is set

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/checkType.js#L57)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** false if x is null or undefined, true otherwise

### isNumber

function:
determines whether the value is Number

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/checkType.js#L66)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/checkType/isNumber.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is number, false otherwise

**Examples**
 isNumber with number input  _(positive)_

```javascript
import { isNumber } from 'myrmidon';

isNumber(1); // true
isNumber(-5); // true
isNumber(0); // true

```

 isNumber with no-number input  _(negative)_

```javascript
import { isNumber } from 'myrmidon';

isNumber('14'); // false
isNumber(''); // false
isNumber(NaN); // false
isNumber(null); // false
isNumber(undefined); // false

```

### isBoolean

function:
determines whether the value is Boolean

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/checkType.js#L75)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/checkType/isBoolean.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is boolean, false otherwise

**Examples**
 isBoolean with boolean input  _(positive)_

```javascript
import { isBoolean } from 'myrmidon';

isBoolean(true); // true
isBoolean(false); // true
isBoolean(new Boolean(true)); // true

```

 isBoolean with no-boolean input  _(negative)_

```javascript
import { isBoolean } from 'myrmidon';

isBoolean('14'); // false
isBoolean(''); // false
isBoolean(NaN); // false
isBoolean(null); // false
isBoolean(undefined); // false

```

### isStream

function:
determines whether the value is Stream

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/checkType.js#L84)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/checkType/isStream.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is Stream, false otherwise

**Examples**
 isStream with node fs streams input  _(positive)_

```javascript
import { isStream } from 'myrmidon';

isStream(_fs.default.createReadStream(_path.default.join(directory, 'input.txt'))); // true
isStream(_fs.default.createWriteStream(_path.default.join(directory, 'out.txt'))); // true

```

 isStream with no-streams input  _(negative)_

```javascript
import { isStream } from 'myrmidon';

isStream(14); // false
isStream('sdsdsd'); // false
isStream(() => {}); // false
isStream(class A {}); // false
isStream(undefined); // false

```

### isGetter

function:
determines whether the value is function getter

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/checkType.js#L94)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/checkType/isGetter.test.js)

**Parameters**

    - `x` **any** target class for examination
    - `name` **string** name of property to check is it getter in x

**Returns**

Returns **boolean** true if x is Getter, false otherwise

**Examples**
 isGetter  _(positive)_

```javascript
import { isGetter } from 'myrmidon';

isGetter(x, 'c'); // true

```

 isGetter  _(negative)_

```javascript
import { isGetter } from 'myrmidon';

isGetter(1, null); // false
isGetter(x, 'a'); // false
isGetter(x, 'constructor'); // false
isGetter(x, 'd'); // false
isGetter(x, 'b'); // false

```

## array

helps to work with js arrays

**direct import**:

```javascript
    import * as helpers from 'myrmidon/array'
```

### toArray

function:
transforms any value to Array

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/array.js#L3)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/array/toArray.test.js)

**Parameters**

    - `value` **any** any array or primitive for examination

**Returns**

Returns **array** \[] if no value passed, value if it is Array and 

**Examples**
 empty value  _(positive)_

```javascript
import { toArray } from 'myrmidon';

toArray(null); // []
toArray(undefined); // []
toArray([]); // []
toArray(''); // [ '' ]
toArray(0); // [ 0 ]

```

### uniqueFilter

function:
generates filter function, that leaves only unique items

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/array.js#L14)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/array/uniqueFilter.test.js)

**Parameters**

    - `isEqual` **function** equality function which receives 2 elements to compare, should return true if elements are equal

**Returns**

Returns **function** filter function, that leaves only unique items

**Examples**
 uniqueFilter with strict equality function  _(positive)_

```javascript
import { uniqueFilter } from 'myrmidon';

() => {
    const leaveUnique = uniqueFilter((a, b) => a === b);


    return [ 1, 2, 3, 3, 2, 5 ].filter(leaveUnique);
}; // [ 1, 2, 3, 5 ]

```

### uniqueIdFilter

constant:
filter function, that leaves only unique items with same id property

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/array.js#L29)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/array/uniqueIdFilter.test.js)

**Examples**
 uniqueIdFilter for array of users  _(positive)_

```javascript

```

### uniqueIdenticFilter

constant:
filter function, that leaves only identicly unique items (same by ===)

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/array.js#L36)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/array/uniqueIdenticFilter.test.js)

**Examples**
 uniqueIdenticFilter for array of numbers  _(positive)_

```javascript

```

### existanceFilter

constant:
filter function, that leaves only exited values

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/array.js#L43)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/array/existanceFilter.test.js)

**Examples**
 existanceFilter  _(positive)_

```javascript
import { existanceFilter } from 'myrmidon';

() => {
    const items = [ 1, 2, null, 0, undefined, 3, 5 ];


    return items.filter(existanceFilter);
}; // [ 1, 2, 0, 3, 5 ]

```

### passFilter

constant:
filter function, that leaves all items

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/array.js#L50)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/array/passFilter.test.js)

**Examples**
 passFilter  _(positive)_

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

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/array.js#L57)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/array/flatten.test.js)

**Parameters**

    - `` **** 
    - `any` **array** array with nested arrays

**Returns**

Returns **array** flattened array

**Examples**
 flatten  _(positive)_

```javascript
import { flatten } from 'myrmidon';

flatten([ 1, 2, [ 'a', 'b', [ 'c' ] ], 0 ]); // [ 1, 2, 'a', 'b', 'c', 0 ]

```

### isUnique

function:
checks are all items of array unique

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/array.js#L68)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/array/isUnique.test.js)

**Parameters**

    - `` **** 
    - `settings` **object** method configuration
    - `any` **array** array

**Returns**

Returns **array** flattened array

**Examples**
 isUnique  _(positive)_

```javascript
import { isUnique } from 'myrmidon';

isUnique([ 1, 2, 3, 4, 5 ]); // true
isUnique([ 1, 2, null, null, 3, 4, 5 ], { ignoreEmpty: true }); // true
isUnique([ { id: 1 }, { id: 2 }, null, { id: 5 } ], { ignoreEmpty: true, field: 'id' }); // true

```

 isUnique  _(negative)_

```javascript
import { isUnique } from 'myrmidon';

isUnique([ 1, 2, 3, 2, 4, 5 ]); // false

```

### last

function:
get last element of an array

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/array.js#L90)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/array/last.test.js)

**Parameters**

    - `` **** 
    - `any` **array** array

**Returns**

Returns **any** last array element

**Examples**
 last  _(positive)_

```javascript
import { last } from 'myrmidon';

last([ 1, 2, 3, 4, 5 ]); // 5

```

## object

**direct import**:

```javascript
    import * as helpers from 'myrmidon/object'
```

### cleanUndefined

function:
cleans object from undefined fields recursievly

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/object.js#L3)

**Parameters**

    - `obj` **Object** primitive for examination

**Returns**

Returns **Object** object without undefined fields

### clone

function:
create deep clone of object

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/object.js#L17)

**Parameters**

    - `x` **Object** input object

**Returns**

Returns **Object** deep copy

### isEmpty

function:
determines whether the object or array is empty

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/object.js#L28)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/object/isEmpty.test.js)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is empty or false otherwise

**Examples**
 isEmpty with empty input  _(positive)_

```javascript
import { isEmpty } from 'myrmidon';

isEmpty({}); // true

```

 isEmpty with no-array input  _(negative)_

```javascript
import { isEmpty } from 'myrmidon';

isEmpty(13); // false
isEmpty(true); // false
isEmpty([ 0 ]); // false
isEmpty({ length: 0 }); // false

```

 isEmpty with empty input  _(negative)_

```javascript
import { isEmpty } from 'myrmidon';

isEmpty(null); // false
isEmpty(undefined); // false
isEmpty(0); // false
isEmpty(''); // false
isEmpty(false); // false

```

## benchmark

helps to benchmark execution time

**direct import**:

```javascript
    import * as helpers from 'myrmidon/benchmark'
```

### getBenchmark

constant:
get result of benchmark counting

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/benchmark.js#L41)

**Returns**

Returns **string** execution time in ms

### startBenchmark

constant:
starts benchmark counting

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/benchmark.js#L51)

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

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/custom.js#L21)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/custom/retry.test.js)

**Parameters**

    - `retrier` **function** function (sync or async) that will be retried
    - `settings` **object** method configuration

**Returns**

Returns **any** result of retrier function call

**Examples**
 retry function calls  _(positive)_

```javascript
import { retry } from 'myrmidon';

() => {
    let i = 0;

    function failing() {
        if (++i < 3) throw new Error(`${i} < 3`);

        return i;
    }

    return retry(() => failing(), {
        retry : 5
    });
}; // 3

```

 retry async function with exponential backoff  _(positive)_

```javascript
import { retry } from 'myrmidon';

async () => {
    return retry(async () => {
        const result = await failing();


        return result;
    }, {
        retry   : 5,
        timeout : {
            min : 1,
            max : 100
        }
    });
}; // 3

```

### getProp

function:
Get nested property of object

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/custom.js#L54)

**Parameters**

    - `obj` **object** input data
    - `path` **string** property path
    - `settings` **object** method configuration

**Returns**

Returns **any** deep object property, or null if nothing found

### fill

function:
Fills string template with specified data

[Source](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/src/custom.js#L72)

[Tests](https://github.com/pustovitDmytro/myrmidon/blob/60dc4f8e480697871fc7e344f6a5c4c06bd2ea34/tests/helpers/custom/fill.test.js)

**Parameters**

    - `template` **string** string template
    - `data` **object** input data
    - `settings` **object** method configuration

**Returns**

Returns **string** filled template

**Examples**
 fill template  _(positive)_

```javascript
import { fill } from 'myrmidon';

fill('Hello {user.firstName} {user.lastName} {user.avatar.url}', { user: { firstName: 'Jason', lastName: 'Gregory' } }); // 'Hello Jason Gregory '

```
