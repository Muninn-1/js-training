'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {
	let arr = str.split(" ")
    
    for (let i = 0; i < arr.length; i++)
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)

    return arr.join(" ")
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.deepStrictEqual(jadenCase('bonjour les gens'), ('Bonjour Les Gens'))
assert.deepStrictEqual(jadenCase('the lord of the rings'), ('The Lord Of The Rings'))
assert.deepStrictEqual(jadenCase('allo allo allo'), ('Allo Allo Allo'))
// End of tests */
