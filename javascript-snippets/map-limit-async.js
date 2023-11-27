 const mapLimit = function(col = [], fn = () => {}, limit) {
	const asyncCollection = col.slice(0, limit).map(async (v) => fn.call(null, v));

	// making use of Promise.all since currently there's no "await all [promise, promise, promise]"" syntax
	return Promise.all(asyncCollection).then(
		(completed) =>  { 
			return completed
		}
	);
}	

console.log(mapLimit(
	[ { key: '👻' }, { key: '🤢' }, { key: '💩' } ],
	(val) => `Transformed ${val.key} into ${val.key}🐤`,
	2
).then((res) => console.log(res)))