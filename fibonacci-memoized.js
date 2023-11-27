/* Rules
  fibonacci(0) = 0
  fibonacci(1) = 1
*/

// fibonacci = (fibonacci - 1) + (fibonacci - 2);

/* Fib(n) = Fib(n-1) + Fib(n-2)*/
const memoFib = function () {
	let memo = {}

	return function fib(n) {
		if (n in memo) {
			return memo[n]
		} else {
			if (n <= 1) {
				memo[n] = n
			} else {
				memo[n] = fib(n - 1) + fib(n - 2)
			}
			
			console.log(memo)

			return memo[n]
		}
	}
}

const factory = memoFib();
const target = 10
console.log(`Fibonacci of ${target} --->:`, factory(1200))
/*
  - memo[3] = fib(3 - 1) + fib(3 - 2) 
  			= fib(2) + fib(1)
			= 1 + 1 = 2
			===> { 1: 1, 0: 0, 2: 1, 3: 2 }

	-- memo[2] 	= fib(2 - 1) + fib(2 - 2) 
				= fib(1) + fib(0) 
				= 1 + 0 = 1
				===> { 1: 1, 0: 0, 2: 1 }

		--- memo[1] = 1 ===> { 1: 1 }
		--- memo[0] = 0 ===> { 1: 1, 0: 0 }

*/