let count = 0
let intervalId = null
const countElement = document.querySelector("h1 span")
const startButton = document.getElementById("button-start")
const pauseButton = document.getElementById("button-pause")
const resetButton = document.getElementById("button-reset")
const subTitle = document.querySelector("h2")
const hello = new Audio("./hello.mp3")

// hello.addEventListener('')
hello.playbackRate = "0.25"
// console.log(countElement, startButton)

startButton.addEventListener("click", startCounting)

pauseButton.addEventListener("click", handlePauseContinue)

resetButton.addEventListener("click", () => {
	count = 0
	countElement.textContent = count
})

subTitle.addEventListener("mouseenter", (event) => {
	hello.playbackRate = "4.0"
	hello.play()
	event.target.style.color = "red"
})
subTitle.addEventListener("mouseleave", (event) => {
	event.target.style.color = "black"
})

function handlePauseContinue(event) {
	console.log(event)
	if (event.target.textContent === "Pause") {
		clearInterval(intervalId)
		intervalId = null
		event.target.textContent = "Continue"
	} else {
		event.target.textContent = "Pause"
		startCounting()
	}
}

function startCounting() {
	hello.play()
	console.log(intervalId)
	if (intervalId) return

	startButton.disabled = true

	intervalId = setInterval(() => {
		// let currentCount = Number(countElement.textContent)
		// currentCount++
		// countElement.textContent = currentCount
		count++
		countElement.textContent = count
	}, 1000)
}
