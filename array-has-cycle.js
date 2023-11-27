const hasCycle = function(head) {
	const nodes = new Set();
	while (head) {
	  if (nodes.has(head)) return true;
	  nodes.add(head);
	  head = head.next;
	}
	return false;
};

// console.log(hasCycle([3,2,0,-4]))

const hasCycleAlt = function(head) {
	let s = head[0];
	let f = head[0];
	head[head.length - 1] = 0

while(f && head[head[f]]) {
	s = head[s];
	f = head[head[f]];

	if(s == f) {
		console.log('Cycle', s, f)
		return true
	}
}

	return false
}

hasCycleAlt([3,2,0,-4])
hasCycleAlt([1,2])