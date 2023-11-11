// 📄
// const math = require('./main')
// const assert = require('assert')

// assert.strictEqual(math.sum(2, 2), 4, 'should sum two numbers')

const math = require('./main')
const assert = require('assert')

assert.strictEqual(math.sum(2, 2), 4, 'should sum two numbers')
assert.strictEqual(math.sum([1, 2, 3, 4, 5]), 15, 'should sum an array')