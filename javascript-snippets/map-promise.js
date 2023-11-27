const mapLimit = function(col = [], fn = () => {}, limit) {
	const asyncCollection = col
		.slice(0, limit)
		.map(value => { 
			return Promise.resolve(fn.apply(null, [value])) 
		});

	return Promise.all(asyncCollection)
}	

const p = new Promise()

mapLimit(
	[ { key: '👻' }, { key: '🤢' }, { key: '💩' } ],
	(val) => `[[[${val.key}]]]`,
	2
).then(console.log)