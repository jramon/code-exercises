/*
    Given n non-negative integers representing an elevation map where the width of each bar is 1, 
    compute how much water it can trap after raining.

    Example 1:
    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6

    Example 2:
    Input: height = [4,2,0,3,2,5]
    Output: 9
*/

const trappingWater = function(height = []) {
    const trapped = height.reduce((acc, current, i, all) => {
        const water = Math.min(current, all[i-1] ? all[i-1] : 0);
        const water2 = Math.min(current, all[i+1] ? all[i+1] : 0);
        // console.log(water + water)

        return water2 + water + acc;
    },0);

    return trapped;
}

// [
//     [0,0,0,0],
//     [0,0],
//     [],
//     [0,0,0]
//     [0,0]
//     [0,0,0,0,0]
// ]

console.dir(trappingWater([4,2,0,3,2,5]))