// const person = {
// 	name: "Benjamin Button",
// 	age: 99,
// 	growYounger() {
// 		let intervalId = setInterval(() => {
// 			if (this.age <= 90) {
// 				clearInterval(intervalId)
// 				return
// 			}
// 			console.log(intervalId)
// 			this.age--
// 			console.log(this.age)
// 		}, 500)
// 	},
// }

// person.growYounger()

// console.log("Before timeout")
// console.time("timeout")
// setTimeout(() => {
// 	console.timeEnd("timeout")
// 	console.log("Executed by setTimeout")
// }, 3000)
// console.log("After timeout")

function faster(delay) {
	let timeoutId = setTimeout(() => {
		delay -= 200
		console.log(`Current delay: ${delay}`)
		if (delay > 0) {
			faster(delay)
		}
	}, delay)
}

faster(2000)

function callMeMaybe(caller) {
	console.log(`${caller} Just called me`)
}

function giveMyPhone(someone, callback) {
	console.log(`Hey, this is ${someone}`)
	setTimeout(() => {
		callback(someone)
	}, 1000)
}

giveMyPhone("Katy Perry", callMeMaybe)

function say(callback, content) {
	if (typeof callback === "function") {
		callback(content)
	}
}

say(console.log, "Hello world")
say()
