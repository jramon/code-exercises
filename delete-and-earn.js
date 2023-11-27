/*
	Given an array nums of integers, you can perform operations on the array.

	In each operation, you pick any nums[i] and delete it to earn nums[i] points. After, you must delete EVERY element equal to nums[i] - 1 or nums[i] + 1.

	You start with 0 points. Return the maximum number of points you can earn by applying such operations.

	Example 1:

	Input: nums = [3,4,2]
	Output: 6
	Explanation: Delete 4 to earn 4 points, consequently 3 is also deleted.
	Then, delete 2 to earn 2 points.
	6 total points are earned.

	Example 2:

	Input: nums = [2,2,3,3,3,4]
	Output: 9
	Explanation: Delete 3 to earn 3 points, deleting both 2's and the 4.
	Then, delete 3 again to earn 3 points, and 3 again to earn 3 points.
	9 total points are earned.
*/


const difference = (a, b) => {
	return a.filter(n => {
		return b.indexOf(n) < 0;
	})
}


// let deleteAndEarn = function (nums = []) {
// 	/* 
// 		grab highest num[i] from the array
// 			then check if they have left and right neighbors
// 			if num[i] has both neighbors
// 				add up your points 
// 				remove the EVERY element equal to nums[i] - 1 or nums[i] + 1. VALUES!
// 				repeat with updated array!
// 			else
// 				grab the last ocurrence of the next highest member 
// 				do checks until neighbors are found
// 				if no more candidates for points, exit and return current points
// 	*/	
	
// 	let points = nums.reduce((highest, next, i)  => {
// 		if(next >= highest) {
// 			// if(nums.includes(next - 1) && nums.includes(next + 1)) {
// 				return next
// 			// }
// 		} 
		
// 		return highest
// 	}, nums[0])

// 	console.log('points on arrival:', points)
// 	nums.splice(nums.lastIndexOf(points), 1)
// 	// console.log('nums after points deletions', nums)
	
// 	nums = difference(nums, [points - 1, points + 1])
	
// 	// console.log('nums after other deletions', nums)
// 	if(nums.length > 0) {
// 		points += deleteAndEarn(nums)
// 	} 

// 	return points
// }

const deleteAndEarn = (nums) => {
    let n = 2 * nums.length;
    let sum = new Array(n).fill(0);

	for (const num of nums) {
        sum[num] += num;
	}

    let take = skip = 0;

	console.log(sum)

    for (let i = 0; i < n; i++) {
        let takei = skip + sum[i];
		let skipi = Math.max(skip, take);
    
		console.log('takei', skip + sum[i])
		console.log('skipi', Math.max(skip, take), '\n')

		take = takei;
        skip = skipi;
    }

    return Math.max(take, skip);
};

// console.log(deleteAndEarn([2,2,3,3,3,4]));
// deleteAndEarn([2,2,3,3,3,4]);
console.log(deleteAndEarn([3,4,2]));



// console.log(difference([2,2,3,3,3,4], [2, 4]))