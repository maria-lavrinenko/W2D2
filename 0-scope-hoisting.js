const myName = "Florian"

/**
 * var is hoisted (declared at the top of your file)
 * var can change (like let)
 * redeclaring a var with the same name is overwriting the previous value
 */
// console.log(i)

// var i = 5

if (true) {
	// console.log(myName)
	const myName = "Not Florian"
	console.log(myName)
}
console.log(myName)

// var doNotUse = "Forbidden"

// if (true) {
// 	var doNotUse = "Oh what?"
// }

// console.log(doNotUse)

// for (var i = 0; i < 5; i++) {}

// console.log(i)
function sayHi(name) {
	// const x = 27
	function one() {
		two()
		function two() {
			console.log(x)
		}
		// const x = "I am X"
	}
	one()
}

const x = "Global scope"

sayHi()

//console.log(x)

// {
//   const anotherVariable = 'foo'
// }

// console.log(anotherVariable)

const cat = {
	name: "Le Chat.",
}
cat.age = 5

// cat = {}
const anotherCat = cat
console.log(cat === anotherCat)

console.log({ name: "cat" } === { name: "cat" }) // false

console.log([] === []) // false
const num = 7

console.log(num === 7)

const arrOfNumbers = [5, 8, 2]
const copy = [...arrOfNumbers]
// const sortedArray = arrOfNumbers.sort()
const sortedArray = copy.sort()
console.log(arrOfNumbers, sortedArray)

const dog = {
	name: "Izmir",
	race: "Border Collie",
}

const newDog = { ...dog, name: "The dog" }
// newDog.name = "Le Chien."

console.log(dog, newDog)

const seaAnimals = ["Dolphin", "Shark", "Goldfish"]
const flyingAnimals = ["Goose", "Dodo", "Parrot"]

// const animals = seaAnimals.concat(flyingAnimals)
const animals = [...seaAnimals, "Rabbit", ...flyingAnimals, "Pyranha"]
console.log(animals)

const student = {
	name: "bob",
	address: {
		city: "Paris",
	},
	hobbies: ["Skate", "Run"],
	age: 27,
}

// const spanishStudent = { ...student }
// spanishStudent.name = "Foo"
// spanishStudent.address.city = "Barcelona"

// console.log(student, spanishStudent)

const stringifiedStudent = JSON.stringify(student, null, 2)
console.log(stringifiedStudent)

const spanishStudent = JSON.parse(stringifiedStudent)
spanishStudent.address.city = "Barcelona"
console.table(spanishStudent)
console.table(student)

// const copy = JSON.parse(JSON.stringify(myObject))

const deepCopy = structuredClone(student)

const shoe = require("./data.json")
console.log(shoe, typeof shoe)
console.log(`${{ name: "Alice" }}`)
