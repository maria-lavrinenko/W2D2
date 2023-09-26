/**
 *
 * setInterval(callback, delay)
 *
 * setTimeout(callback, delay)
 *
 */

// let counter = 5
// let intervalId = setInterval(() => {
// 	console.log(counter)

// 	if (counter === 0) {
// 		clearInterval(intervalId)
// 		console.log("Liftoff!")
// 	}
// 	counter--
// }, 1000)

function createTimer(
	startingPoint,
	direction = "increment",
	delay = 1000,
	endpoint
) {
	let time = startingPoint
	let intervalId = setInterval(() => {
		console.log(time)

		if (time === endpoint) {
			clearInterval(intervalId)
		}
		if (direction === "increment") {
			time++
		} else {
			time--
		}
	}, delay)
}

// createTimer(10, "decrement", 200, 0)

console.log("I am before the set timeout")

setTimeout(() => {
	console.log("I am being delayed !")
}, 0)

console.log("I am after the setTimeout")

function countFaster(delay = 1000, acceleration, startPoint, endpoint) {
	const timeoutId = setTimeout(() => {
		console.log(startPoint, delay)
		if (delay >= 100) {
			delay -= acceleration
		}
		if (startPoint === endpoint) {
			return clearTimeout(timeoutId)
		}
		startPoint++
		countFaster(delay, acceleration, startPoint, endpoint)
	}, delay)
}

// countFaster(1000, 50, 0, 100)

function fastInterval(delay, start, end) {
	const intervalId = setInterval(() => {
		delay -= 100
		console.log(start, delay)
		start++
		if (start === end) {
			return clearInterval(intervalId)
		}
		/**
		 * ! This is weird, don't do that
		 */
		clearInterval(intervalId)
		fastInterval(delay, start, end)
	}, delay)
}

fastInterval(1000, 0, 100)
