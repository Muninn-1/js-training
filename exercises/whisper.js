'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(str){
	str = str.toLowerCase()
	str = "*" + str + "*"

	return str
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('AAA'), ('*aaa*'))
assert.deepStrictEqual(whisper('ABcDEf'), ('*abcdef*'))
assert.deepStrictEqual(whisper('AHFOEB'), ('*ahfoeb*'))
// End of tests */
