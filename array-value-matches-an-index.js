/* 
    Given an array of unique sorted numbers. 
    Find out if there is an array's value that matches its index.
*/

function matchesIndex(nums) {
    for(let i = 0; i < nums.length; i++) {
        // console.log(i, nums[i])
        if(i === nums[i]) {
            return true
        }
    }

    return false
}

function matchesIndex(nums) {
    return nums.some((n, i, all) => {
        return n === all[n];
    });
}

console.log('Does a value matches its index?', matchesIndex([21,45,66,77,96,5,870]));