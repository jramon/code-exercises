/*
    findCycle([1,2,3,4,5,6,1,8,9,10,4], 7)  
*/
function findCycle(nums, start) {
    let seen = new Set()
    let current = start
	let startFrom
    
    console.log(seen);

    while(!seen.has(current)) {
        seen.add(current);

        current = nums[current]
    }

    startFrom = current;

    do{
        current = nums[current]
        
        console.log(current)
    } while (startFrom != current)
}

const input = [1,2,3,4,5,6,1,8 ,9,10,4];
findCycle(input, 7);