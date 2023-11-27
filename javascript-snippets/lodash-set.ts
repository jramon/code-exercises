function set<T extends object>(obj: T, path: string | string[], value: any) {
	// your code here
	if(typeof path === "string") {
		path = path.split('.')
	}

	let i = 0;
	let target = path.map(t => [t])

	console.log(target)
}
  
const obj = {
	a: {
		b: {
			c: [1,2,3]
		}
	}
}

console.log(obj['a']['b']['c'])
set(obj, 'a.b.c', 'BFE')
console.log(obj.a.b.c)