const test = require('ava')
const { jpy } = require('../')

test(' 3000     -> "3,000"', t => {
  t.is("3,000", jpy(3000))
})

test('"3000"    -> "3,000"', t => {
  t.is("3,000", jpy('3000'))
})

test(' 1000000  -> "1,000,000"', t => {
  t.is("1,000,000", jpy('1000000'))
})

test('"1000000" -> "1,000,000"', t => {
  t.is("1,000,000", jpy('1000000'))
})

test('"a"       -> throw new Error("parameter is NaN")', t => {
  try {
    jpy("a")
  } catch (e) {
    t.is(e.message, 'parameter is NaN')
  }
})
