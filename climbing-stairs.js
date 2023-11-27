/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n <= 1) {
        return 1
    }

    let p = 1;
    let pp = 1;
    let steps = 0;

    for(let i = 2; i <= n; i++) {
        steps = p + pp;

        pp = p;
        p = steps;
    }

    return steps
};

console.log(climbStairs(4));