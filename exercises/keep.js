'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */


function keepFirst(str) {
	return str.substring(0,2)
}

function keepLast(str) {
	return str.substring((str.length -2), str.length)
}

function keepFirstLast(str) {
	return str.substring(2,4)
}

//* Begin of tests
const assert = require('assert')

//Tests for cutFirst
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.deepStrictEqual(keepFirst('aaa'), ('aa'))
assert.deepStrictEqual(keepFirst('ABcDeF'), ('AB'))
assert.deepStrictEqual(keepFirst('AHFOEB'), ('AH'))

//Tests for cutFirst
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.deepStrictEqual(keepLast('aaa'), ('aa'))
assert.deepStrictEqual(keepLast('ABcDeF'), ('eF'))
assert.deepStrictEqual(keepLast('AHFOEB'), ('EB'))
//Tests for cutFirst
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirstLast('aaaaaa'), ('aa'))
assert.deepStrictEqual(keepFirstLast('ABcDeF'), ('cD'))
assert.deepStrictEqual(keepFirstLast('AHFOEB'), ('FO'))
// End of tests */