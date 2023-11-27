
/*
    Initialize a stack S.
    Process each bracket of the expression one at a time.
    If we encounter an opening bracket, we simply push it onto the stack. This means we will process it later, let us simply move onto the sub-expression ahead.
    If we encounter a closing bracket, then we check the element on top of the stack. If the element at the top of the stack is an opening bracket of the same type, then we pop it off the stack and continue processing. 
		Else, this implies an invalid expression.
    In the end, if we are left with a stack still having elements, then this implies an invalid expression.
*/

const validParenthesis = function(s) {
	const stack = [];
	const dict  = { 
		")": "(",
		"]": "[",
		"}": "{",
	}

	for(i = 0; i < s.length; i++) {
		let curr = s[i]
		// if current is a closing bracket
		if(dict[curr]) {
			// remove topmost from stack
			let top = stack.pop()

			if(dict[curr] !== top) {
				return false
			}
		} else { 
			// not in  dictionary? then it's an opening bracket
			stack.push(s[i])
		}
	}
	
	return true
}

console.log(validParenthesis("{[{}](){}}"))