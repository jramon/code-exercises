class Person {
	constructor (config) {
		for(let property in config) {
			this.set(property, config[property])
		}
	}

	events = {}

	set(attribute, value) {
		this[attribute] = value
		const handlerArgs = [attribute, this[attribute], value]
		// 'change' event, gets called on every attribute change
		// 'change:classattribute Emitted only when "classattribute" changes, for example "change:age"
		if(this.events['change']) {
			// runs registered callbacks for this event
			this.events['change'].forEach(handler => {
				console.log('ARGS', handler.size)
				handler.apply(this, handlerArgs)
			});
		}
	}

// The on method, registers callback for events
	// events = { 
	// 	"change": [handlerFunction1, handlerFunction2, ... ] 
	//  "change:age": [handlerFunctionForAge]
	// }
	on(type, callback) {
		const [eventName, attribute] = type.split(':')

		if(!this.events[type]) {
			this.events[type] = []
		}

		this.events[type].push(callback)
	}
}


// Class usage:
// create a new instance:
const person = new Person({ name: 'Ramon', age: 36, foo: 'bar' })



person.on('change', function(key, oldVal, newVal) {
	// change will be called everytime an attribute changes
	console.log('attr', key, 'changed from', oldVal, 'to', newVal)
})

person.on('change', function(key, oldVal, newVal) {
	// change will be called everytime an attribute changes
	console.log('I was called but I do nothing')
})

person.set('name','Sakina')


person.on('change:name', function(oldVal, newVal) {
	// called only when the "name" attribute changes
	// note that the signature of this callback is 
	// different from the generic "change" event
	console.log('specifically name changed from', oldVal, 'to', newVal)
})



console.log('Instance -> ', person)