// returns a promise
const callServer = function(id) { 
	return fetch(`https://api.spacexdata.com/v3/history/${id}`) 
	
	// return new Promise(resolve => {
	// 	setTimeout(() => {
	// 	  resolve('resolved - ' + id);
	// 	}, 3000);
	//   });
}

function main() {
	for(let id in new Array(10).fill(null)) {
		const prom = callServer(parseInt(id, 10) + 1)

		prom.then(h => { 
			const jsonPromise = h.json();
		
			jsonPromise.then(data => {
				console.log('Response =>', data)
			})
		})
	}
}

async function asyncMain () {
	for(let id in new Array(10).fill(null)) {
		const res = await callServer(parseInt(id, 10) + 1)
		const jsonData = await res.json()

		console.log(jsonData)
	}
}


// console.log(main())
asyncMain()
