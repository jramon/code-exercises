const addOne = function(n) {
	return n + 1
}

const times2 = function(n) {
	return n * 2;
}

const compose = function(fns = []) {
	return function(n) {
		let result = n
		f = 0

		while(f < fns.length) {
			result = fns[f](result)

			console.log(`Result at ${fns[f].name}: ${result}`)

			f++
		}
		
		return result
	}
}

const composeReverse = function(fns = []) {
	return function(n) {
		let result = n
		f = fns.length - 1
		
		while(f >= 0) {
			result = fns[f](result)
			
			console.log(`Result at ${fns[f].name}: ${result}`)

			f--
		}

		return result
	}
}

const composeN = function(fns) {
	return function (val) {
		return fns.reduceRight((acc, fn) => {
			return fn(acc)
		}, val);
	}
}

// const composeArrow = fns => val => fns.reduceRight((acc, fn) => fn(acc), val) 
const composeArrow = fns => val => fns.reduce((acc, fn) => fn(acc), val) 

console.log(composeN([addOne, times2])(3))
// or
const composed = composeN([addOne, times2])
console.log(composed(3))
 
// arrow function syntax
console.log(composeArrow([addOne, times2])(3))
