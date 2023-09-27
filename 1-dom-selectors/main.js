/**
 * Old ways to load JS file:
 * - Add the script tag at the bottom of your page
 * - Wrap your logic in document.AddEventListener('DOMContentLoaded' () => {...})
 *
 * newer way:
 *
 * Load the JS file in the head nd add a type of "module"
 *
 */

// for (i = 0; i < 5; i++) {}

// document.addEventListener("DOMContentLoaded", () => {
const allParagraphes = document.querySelectorAll("p")

// console.log(allParagraphes)
const nonImportantParagraphes = document.querySelectorAll(
	"p.special:not(.important)"
)
const oneCard = document.querySelector(".card")
const list = document.querySelector("ul.list")

// console.log(nonImportantParagraphes)

nonImportantParagraphes.forEach((paragraph) => {
	paragraph.classList.add("spin", "another-class")
})

const importantTag = document.querySelector(".special.important")
console.log(importantTag)

importantTag.setAttribute("my-attribute", "value")

// const oneLi = document.createElement("li")
// oneLi.textContent = "Hello from JS!!!!"

// list.append(oneLi)

const pokemons = [
	{
		name: "Bulbasaur",
		link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
	},
	{
		name: "Charizard",
		link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
	},
	{
		name: "Metapod",
		link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png",
	},
]

// Loop over the pokemons
// Create an li, an img, a title, add img and title to the li
// Add the li to the list?

pokemons.forEach((pokemon) => {
	// const li = document.createElement("li")
	// const title = document.createElement("h3")
	// const picture = document.createElement("img")
	// title.textContent = pokemon.name
	// picture.setAttribute("src", pokemon.link)
	// // Append title and picture to the li
	// li.append(title, picture)
	const pokeElement = createPokemonElement(pokemon)
	list.append(pokeElement)
})

function createPokemonElement(pokemon) {
	const li = document.createElement("li")
	const title = document.createElement("h3")
	const picture = document.createElement("img")
	title.textContent = pokemon.name
	picture.setAttribute("src", pokemon.link)
	// Append title and picture to the li
	li.append(title, picture)
	return li
}

const cardContent = `
<h2>Added via innerHTML</h2>
<p>Lorem lorem</p>

<button onclick="alert('hacking in progress')">Click</button>
`

// the string is parsed into actual HTML
oneCard.innerHTML = cardContent

const notLive = document.querySelectorAll("p.live")
const live = document.getElementsByClassName("live")
const newLiveElement = document.createElement("p")
newLiveElement.classList.add("live")
newLiveElement.textContent = "Live 3"
document.body.append(newLiveElement)
console.log(notLive)
console.log(live)

/**
 * Create an element which is going to be a flexbox
 * row wrap gap
 *
 *
 * inside of the flexbox let's add  99 div.circle
 *
 * 200ms changeColor
 *
 *
 */

const container = document.createElement("div")
container.classList.add("container")

for (let i = 0; i < 99; i++) {
	const circle = document.createElement("div")
	circle.classList.add("circle")
	container.append(circle)
	circle.style.backgroundColor = randomColor()
	circle.textContent = i + 1
	setInterval(() => {
		circle.style.backgroundColor = randomColor()
	}, 1000)
}

document.body.append(container)

function randomColor() {
	// const r = Math.floor(Math.random() * 255)
	// const g = Math.floor(Math.random() * 255)
	// const b = Math.floor(Math.random() * 255)
	// return `rgb(${r}, ${g}, ${b})`
	return `hsl(${Math.random() * 360}, 40%, 65%)`
}

/**
 * #1A1A1A
 * rgb(220, 120, 5)
 * hsl()
 */
// })

const articleElement = document.querySelector("article#my-first-article")

const buttonInArticle = articleElement.querySelector("button")
