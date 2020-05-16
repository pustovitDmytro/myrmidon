# checkType

helps to indicate type of any value

**direct import**:

```javascript
    import * as helpers from 'myrmidon/checkType'
```

## isString

function:
determines whether the value is string

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/checkType.js#L3)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is string, false otherwise

## isClass

function:
determines whether the value is class

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/checkType.js#L12)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is class, false otherwise

## isFunction

function:
determines whether the value is function

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/checkType.js#L21)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is function, false otherwise

## isObject

function:
determines whether the value is an object

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/checkType.js#L30)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is an object, false otherwise

## isArray

function:
determines whether the value is array

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/checkType.js#L39)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is array, false otherwise

## isPromise

function:
determines whether the value is promise

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/checkType.js#L48)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is promise, false otherwise

## isValue

function:
determines whether the value is set

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/checkType.js#L57)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** false if x is null or undefined, true otherwise

## isNumber

function:
determines whether the value is Number

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/checkType.js#L66)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is number, false otherwise

## isBoolean

function:
determines whether the value is Boolean

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/checkType.js#L75)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is boolean, false otherwise

## isStream

function:
determines whether the value is Stream

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/checkType.js#L84)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is Stream, false otherwise

## isGetter

function:
determines whether the value is function getter

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/checkType.js#L94)

**Parameters**

    - `x` **any** target class for examination
    - `name` **string** name of property to check is it getter in x

**Returns**

Returns **boolean** true if x is Getter, false otherwise

# array

helps to work with js arrays

**direct import**:

```javascript
    import * as helpers from 'myrmidon/array'
```

## toArray

function:
transforms any value to Array

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/array.js#L3)

**Parameters**

    - `value` **any** any array or primitive for examination

**Returns**

Returns **array** \[] if no value passed, value if it is Array and 

## uniqueFilter

function:
generates filter function, that leaves only unique items

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/array.js#L14)

**Parameters**

    - `isEqual` **function** equality function which receives 2 elements to compare, should return true if elements are equal

**Returns**

Returns **function** filter function, that leaves only unique items

## uniqueIdFilter

constant:
filter function, that leaves only unique items with same id property

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/array.js#L29)

## uniqueIdenticFilter

constant:
filter function, that leaves only identicly unique items (same by ===)

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/array.js#L36)

## existanceFilter

constant:
filter function, that leaves only exited values

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/array.js#L43)

## passFilter

constant:
filter function, that leaves all items

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/array.js#L50)

## flatten

function:
flattens array

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/array.js#L57)

**Parameters**

    - `` **** 
    - `any` **array** array with nested arrays

**Returns**

Returns **array** flattened array

## isUnique

function:
checks are all items of array unique

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/array.js#L68)

**Parameters**

    - `` **** 
    - `settings` **object** method configuration
    - `any` **array** array

**Returns**

Returns **array** flattened array

## last

function:
get last element of an array

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/array.js#L90)

**Parameters**

    - `` **** 
    - `any` **array** array

**Returns**

Returns **any** last array element

# object

**direct import**:

```javascript
    import * as helpers from 'myrmidon/object'
```

## cleanUndefined

function:
cleans object from undefined fields recursievly

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/object.js#L3)

**Parameters**

    - `obj` **Object** primitive for examination

**Returns**

Returns **Object** object without undefined fields

## clone

function:
create deep clone of object

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/object.js#L17)

**Parameters**

    - `x` **Object** input object

**Returns**

Returns **Object** deep copy

## isEmpty

function:
determines whether the object or array is empty

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/object.js#L28)

**Parameters**

    - `x` **any** primitive for examination

**Returns**

Returns **boolean** true if x is empty or false otherwise

# benchmark

helps to benchmark execution time

**direct import**:

```javascript
    import * as helpers from 'myrmidon/benchmark'
```

## getBenchmark

constant:
get result of benchmark counting

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/benchmark.js#L41)

**Returns**

Returns **string** execution time in ms

## startBenchmark

constant:
starts benchmark counting

[Source]\(/blob/a75fe8566826f0c9e33da7b10f0c32e774770786
/src/benchmark.js#L51)

**Returns**

Returns **any** identifier of count start
