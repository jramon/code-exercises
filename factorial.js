/*  
    Factorial
    
    The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers
    less than or equal to n: 
    
    n! = n • (n - 1) • (n - 2) • (n - 3) ••• 3 • 2 • 1 
    
    e.g.
    5! = 5 • 4 • 3 • 2 • 1 = 120
*/

function factorial(num) {
    let result;
    let aux = num;

    for(let i = num - 1; i >= 1; i--) {
        aux = aux * i;
        result = i * aux;
    }

    return result;
}
// console.log('Factorial:', factorial(6));

// Recursive solution
function recFactorial(num) {
    // last iteration (num = 2)  will return 2 * 1
    // first iteration (num = 5) will return 5 * getFactorial(4)
    while(num > 1) { 
        return num * recFactorial(num - 1); 
    } 

    // this return statement will be honored only when the while's loop condition is false:
    // getFactorial(1) will return 1
    return num;
}

// console.log('Recursive Factorial', recFactorial(6))

function recFactorialNoLoop(num) {
    if(num > 1) {
        return num * recFactorialNoLoop(num - 1);
    }
    
    // will return 1 during the last recursive pass this function
    return num;
}

console.log('Recursive Factorial No Loop:', recFactorialNoLoop(5));
