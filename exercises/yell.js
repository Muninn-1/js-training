'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(str){
	str = str.toUpperCase()

	return str
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('aaa'), ('AAA'))
assert.deepStrictEqual(yell('aBcdeF'), ('ABCDEF'))
assert.deepStrictEqual(yell('ahfoeb'), ('AHFOEB'))
// End of tests */
