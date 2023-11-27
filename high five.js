const highFive = (items = []) => {
	let timesSeen = {};
	let result = [];

	// if b is larger than current (aka a), skip it, remember returning -1 means skip 
	const sorted = items.sort((a, b) => b[1] - a[1]); 
	const groups = sorted.reduce((total, c, i, all) => {
		timesSeen[c[0]] = ~~timesSeen[c[0]] + 1;

		if(timesSeen[c[0]] <= 5) {
			return { ...total, [c[0]]: ~~total[c[0]] + c[1] }
		}  

		// skip
		return total
	}, {});
	

	for (const g in groups) {
		result.push([g, Math.floor(groups[g] / 5)]);
	}

	return result
}

items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]];

console.log('high five', highFive(items));