// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]

// Remove array duplicates IN PLACE
function removeDuplicates(nums) {
    let i = 0;
    
    for (var j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
            console.log(nums)
        }
    }

    return i + 1;
}

// removeDuplicates( [0,0,14,1,1,23,2,3,23,4,1,0])
// console.log(removeDuplicates( [1,1,1,2,1]))
console.log(removeDuplicates( [0,0,0,1,2,3]))
