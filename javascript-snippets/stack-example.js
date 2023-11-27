// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function customStack(S) {
	let stack = []
	let hasError = false
	 const instructions = S.split(' ')
	 const operators = {
		 "n": function(n) {
			 stack.push(n)
		 },
		 "POP": function() {
			 stack.pop()
		 },
		 "DUP": function () {
			 const [last] = stack.slice(-1)
 
			 stack.push(last)
		 },
		 "+": function() {
			 basicCheck()
			 // [second to last, last]
			 const [y, z] = stack.slice(-2)
 
			 stack.splice(stack.length - 2, 2, (y + z)) 
		 },
		 "-": function() {
			 basicCheck()
 
			 const [y, z] = stack.slice(-2)
			 const subs = z - y
 
			 stack.splice(-1, 1, subs)
 
		 }
	 }
 
	 const basicCheck = function () {
		 if(stack.length < 2) {
			 hasError = true
		 }
	 }
 
	 //exec
	 const res = instructions.every((ins, opeators) => {
		 const param = parseInt(ins, 10);
 
		 if(Number.isInteger(param)) {
			 operators["n"].call(null, param)

			 return stack.length
		 } else {
			if(basicCheck()) {
				return false
			}
			 operators[ins]()
		 }
	 })
 
	 // console.log('LAST', stack[stack.length - 1])
	 if(~~res > 0) {
		 return stack.pop()
	 } else return res
 
	//  return res
 }

 console.log(customStack('13 DUP 4 POP 5 DUP + DUP + -'))
 console.log(customStack( '4 5 6 - 7 +'))
 console.log(customStack('5 6 + -'))
 console.log(customStack( '3 DUP 5 - -'))

 
