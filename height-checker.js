/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    const sorted = [].concat(heights).sort((a,b) => a -  b);

	return sorted.filter((h, i) => h !== heights[i]).length
};

console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]))