// Find the first two elements that add up to the target value

// O(n) Linear pass
// O(1) Time
// O(n) + O(1)
function twoSum(nums = [], target) {
    const aux = {};
    let result;
    
    nums.some((n, i) => {
        const diff = target - n;
        console.log('seen indexes', i)
        
        if (aux[n]) {
            result = [nums[aux[n]], n];
            return true
        }
        
        aux[diff] = i;
    });

    return result;
}


// O(n*n) Time where n = n.length
// No extra space because it doesn't require an another data structure for lookup
function twoSumNoExtraSpace(nums = [], target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [nums[i], nums[j]];
            }
        }
    }
}

console.log('SUM:', twoSum([2, 7, 11, 15], 18));
// console.log('SUM NO EXTRA SPACE:', twoSumNoExtraSpace([2, 7, 11, 15], 18));
console.log('SUM NO EXTRA SPACE:', twoSumNoExtraSpace([0, 18, 7, 11, 15], 18));
// console.log('SUM NO EXTRA SPACE', twoSumNoExtraSpace([3,3], 6));


const twoSumEasy = function(nums, target) {
    const aux = {};
    let result;

    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        
        if(aux[nums[i]] >= 0) {
            result = [aux[nums[i]], i];
        }

        aux[diff] = i;
    }

    return result;
};

console.log('Easy Leetcode:', twoSumEasy([2,7,11,15], 9));


/*  
Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]

Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
 */

const twoSumSortedAsc = function(nums, target) {
    let result;

    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        
        for(let j = 1; j < nums.length; j++) {
            if (diff + nums[j] === target) {
                result = [i + 1, j]
            }
        }
    }

    return result;
}

// console.log('Two Sum Sorted Asc:', twoSumSortedAsc([2,7,11,15], 9));
console.log(twoSumSortedAsc([-1,0], -1));