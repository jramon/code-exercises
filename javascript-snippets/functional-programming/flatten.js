/* 
	Flatten
	Combines nested arrays into a single array
*/

const def = x => typeof x !== 'undefined'
const isArray = x => Array.isArray(x)

const flatten = ([x, ...xs]) => def(x)
    ? isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)]
    : []

const array1 = [1,2,3]
const array2 = [4,[5,[6]]]
console.log(flatten([array1, array2])) // [1,2,3,4,5,6]