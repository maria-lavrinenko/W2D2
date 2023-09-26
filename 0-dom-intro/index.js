console.log("hello")
console.log(document.title)
/**
 * Select the h1 and give it a color
 */

// const titleElement = document.querySelector('#title')
const spanElement = document.querySelector("#counter > span")
const titleElement = document.querySelector(".card > .title")
console.log(titleElement)

titleElement.style.backgroundColor = "red"
let count = 0

setInterval(() => {
	// console.log(spanElement)
	spanElement.textContent = count
	count++
}, 1000)

// background-color
/**
 * Add events listeners
 */

const myResetButton = document.querySelector("#reset-button")

myResetButton.addEventListener("click", () => {
	console.log("clickety click")
	count = 0
	spanElement.textContent = count
})
