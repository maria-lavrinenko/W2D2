/**
 * setInterval(callback, delay)
 *
 */

const person = {
	name: "Benjamin Button",
	age: 99,
	growYounger() {
		setInterval(() => {
			this.age--
			console.log(this.age)
		}, 2000)
	},
}

person.growYounger()
