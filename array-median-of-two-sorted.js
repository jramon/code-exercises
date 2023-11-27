/* 
	Median of Two Sorted Arrays
	Given two sorted arrays nums1 and nums2 of size m and n respectively, 
	return the median of the two sorted arrays.

	The overall run time complexity should be O(log (m+n)).

	Example 1:

	Input: nums1 = [1,3], nums2 = [2]
	Output: 2.00000
	Explanation: merged array = [1,2,3] and median is 2.


	Example 2:

	Input: nums1 = [1,2], nums2 = [3,4]
	Output: 2.50000
	Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


	Example 3:

	Input: nums1 = [0,0], nums2 = [0,0]
	Output: 0.00000

	Example 4:
	Input: nums1 = [], nums2 = [1]
	Output: 1.00000

	Example 5:
	Input: nums1 = [2], nums2 = []
	Output: 2.00000
	
	Constraints:

	nums1.length == m
	nums2.length == n

	0 <= m <= 1000
	0 <= n <= 1000

	1 <= m + n <= 2000
	-106 <= nums1[i], nums2[i] <= 106
*/

const getMedian = function(a = [], m, b = [], n, k) {
	// !!(a && b)
	if(m <= 0) return a[k-1]
	if(n <= 0) return b[k-1] 

	if(k <= 1) return Math.min(a[0], b[0])
	if(b[m/2] >= a[n/2]) {
		if((n/2 + 1 + m/2) >= k) {
			return getMedian(a, n, b, m, m/2, k)
		} else {
			return getMedian(a + n/2 + 1, n - (n/2 + 1), b, m, k - (n/2 + 1))
		}
	} else {
		if((m/2 + 1 + n/2) >= k) {
			return getMedian(a, n/2, b, m, k)
		} else {
			return getMedian(a,n,b + m/2 + 1, m -(m/2 + 1), k - (m/2 + 1))
		}
	}
}
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const findMedianSortedArrays = function(A = [], B = []) {
	const m = A.length, n = B.length
	
   	if((n + m) % 2 === 0) { // even 
		return getMedian(A, m, B, n)
	} else {
		return getMedian(A, m, B, n, (m+n)/2 + 1)
	}
};

console.log(findMedianSortedArrays([1,2],[3,4]))