const binarySearch = function(items, target){
    let lowIndex = 0,                 
        highIndex = items.length - 1, 
        midIndex, candidate;
        
    while(lowIndex <= highIndex) {
        midIndex = Math.floor((lowIndex + highIndex) / 2) 
        candidate = items[midIndex] 

		if(candidate > target) {
			highIndex = midIndex
		} else if(candidate < target) {
			lowIndex = midIndex + 1
		} else { 
            return midIndex 
        }
    }
}

const items = [1,3,4,5,6,7,9];

console.log('Target found at index:', binarySearch(items, 9))