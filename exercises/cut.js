'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst(str) {
	return str.substring(2)
}

function cutLast(str) {
	return str.substring(0, (str.length -2))
}

function cutFirstLast(str) {
	str = cutFirst(str)
	return cutLast(str)
}

//* Begin of tests
const assert = require('assert')

//Tests for cutFirst
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.deepStrictEqual(cutFirst('aaa'), ('a'))
assert.deepStrictEqual(cutFirst('ABcDeF'), ('cDeF'))
assert.deepStrictEqual(cutFirst('AHFOEB'), ('FOEB'))

//Tests for cutFirst
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)
assert.deepStrictEqual(cutLast('aaa'), ('a'))
assert.deepStrictEqual(cutLast('ABcDeF'), ('ABcD'))
assert.deepStrictEqual(cutLast('AHFOEB'), ('AHFO'))
//Tests for cutFirst
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirstLast('aaa'), (''))
assert.deepStrictEqual(cutFirstLast('ABcDeF'), ('cD'))
assert.deepStrictEqual(cutFirstLast('AHFOEB'), ('FO'))
// End of tests */
