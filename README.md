# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sam_julian/lotide`

**Require it:**

`const _ = require('@sam_julian/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Prints to the console if two given arrays are equal or not
* `assertEqual(actual, expected)`: Prints to the console if two primitive values are equal or not
* `assertObjectsEqual(object1, object2)`: Prints to the console if two given objects are equal or not
* `countLetters(string)`: Returns an object containing the number of times that a character is present in a given string
* `countOnly(allItems, itemsToCount)`: Returns an object containing the number of times an item that needs to be counted is present
* `eqArrays(array1, array2)`: Returns true if two arrays are equal and false otherwise
* `findKey(object, callback)`: Return the first key for which the callback returns a truthy value
* `flatten(array)`: Returns a given array with no level of nesting
* `head(array)`: Returns the first element of a given array
* `letterPositions(string)`: Returns an object containing the indices that each character occurs in for a given string
* `map(array, callback)`: Returns an array where a callback has been applied to every element in a given array
* `middle(array)`: Returns an array containing an element in the middle of a given array with the array containing the the 2 middle elements for an array with an even nember of elements
* `tail(array)`: Returns an array containing all but the first element in a given array
* `takeUntil(array, callback)`: Returns an array where all the elements have been taken from the given array until the callback called on an element returns true
* `without(source, itemsToRemove)`: Returns an array where the given array is filtered of items included in another given array
