const spreadArg = (fn) => (...args) => fn(args)
const def = x => typeof x !== 'undefined'
const isArray = x => Array.isArray(x)
const reduce = ([x, ...xs], f, memo, i = 0) => def(x)
    ? reduce(xs, f, f(memo, x, i), i + 1) : memo


const reverse = xs => reduce(xs, (memo, x) => [x, ...memo], [])

const length = xs => reduce(xs, (memo, x) => memo + 1, 0)

const map = (xs, fn) => reduce(xs, (memo, x) => [...memo, fn(x)], [])

const filter = (xs, fn) => reduce(xs, (memo, x) => fn(x)
    ? [...memo, x] : [...memo], [])

const reject = (xs, fn) => reduce(xs, (memo, x) => fn(x)
    ? [...memo] : [...memo, x], [])

const first = (xs, n) => reduce(xs, (memo, x, i) => i < n
    ? [...memo, x] : [...memo], [])

const last = (xs, n) => reduce(xs, (memo, x, i) => i >= (length(xs) - n)
    ? [...memo, x] : [...memo], [])

const merge = spreadArg(xs => reduce(xs, (memo, x) => [...memo, ...x], []))

const flatten = xs => reduce(xs, (memo, x) => x
    ? isArray(x) ? [...memo, ...flatten(x)] : [...memo, x] : [], [])

const add = spreadArg(([x, ...xs]) => reduce(xs, (memo, y) => memo + y, x))

const divide = spreadArg(([x, ...xs]) => reduce(xs, (memo, y) => memo / y, x))

const multiply = spreadArg(([x, ...xs]) => reduce(xs, (memo, y) => memo * y, x))

console.log(merge([1,3], [2]))