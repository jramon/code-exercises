/* 
	215. Kth Largest Element in an Array

	Given an integer array nums and an integer k, return the kth largest element in the array.

	Note that it is the kth largest element in the sorted order, not the kth distinct element.	

	Example 1:
	Input: nums = [3,2,1,5,6,4], k = 2
	Output: 5

	Example 2:
	Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
	Output: 4

	Constraints:
	1 <= k <= nums.length <= 104
	-104 <= nums[i] <= 104
 */

const findKthLargest = function(nums, k) {
	const copy = nums.slice()
	nums.sort((a,b) => a - b)
	console.log(copy)
	const unique = new Set(copy)
	let largest  = []
	let prev = 0 

	for(const v of unique.values()) {
		if(v > prev) {
			largest.push(v)
		} else largest.unshift(v)

		prev = v

		console.log(largest)
	}

	return nums[nums.length - k]
};

// TODO solve this problem by using a Heap 

// console.log(findKthLargest([3,2,1,5,6,4], 2)) // 2nd largest: 5
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)) // 4th largest: 4
console.log(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 2)) // 2nd largest: 10