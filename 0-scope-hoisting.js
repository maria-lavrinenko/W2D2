/**
 * var is hoisted (declared at the top of your file)
 * var can change (like let)
 * redeclaring a var with the same name is overwriting the previous value
 */

console.log(i)

var i = "Youpidoup"
// What is the value of i
console.log(i) // => "Youpidoup"

for (var i = 0; i < 10; i++) {}

console.log(i) // 10

let j = "Badaboum"

let what = "@"
for (let j = 0; j < 10; j++) {
	const aName = "Manucchian"

	if (true) {
		let aName = 6
		console.log(what) // "@"
		if (true) {
			// console.log(what) //
			const what = "error"
			console.log(what) // "error"
		}
		console.log(what) // @
	}
}

console.log(j) // "Badaboum"

sayHi("Bruno")

function sayHi(name) {
	return `Hi ${name}`
}

if (true) {
	function aNestedFunction() {
		return "I am in my own world"
	}
	const aNestedArrow = () => "I do not exist in the outerScopes"
	if (true) {
		aNestedArrow()
	}
}

console.log(aNestedFunction())
// console.log(aNestedArrow())

/**
 *
 * Callbacks
 *
 * A callback is a function called back by an other function
 *                          (executed)
 */

function morningSetup(step1, step2, step3, step4) {
	console.log("ZZZZZZZ")
	step1()
	console.log("-____-")
	step2()
	console.log("🍕")
	step3()
	console.log("🛀")
	step4()
	console.log("🥾")
}

const wakeUp = () => {
	console.log("Let's wake up!")
}

const eat = () => console.log("Nom nom nom")

const showerTime = () => console.log("Singing a cool song.")

morningSetup(wakeUp, eat, showerTime, () => console.log("Running, I'm late!"))

/**
 * Bonus time
 */

Array.prototype.myForEach = function (callback) {
	console.log("In myForEach definition")
	console.log(this)
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}

const array = ["duck", "snail", "stag"]

array.myForEach((el, i, arr) => {
	console.log(`Iteration ${i}, value: ${el}`)
})

const bigWords = ["Anthropologie", "Manicheisme", "Amerindiens", "sea"]

// const condition -> word.length > 5

/**
 * Simple filtering made with a classic for loop
 */
let result = []

for (let i = 0; i < bigWords.length; i++) {
	if (bigWords[i].length > 5) {
		result.push(bigWords[i])
	}
}

// bigWords.filter((word, i, arr) => word.length > 5)

/**
 * Recreating the behaviour of the filter method.
 * It's just about reimplementing the simple filter.
 */

Array.prototype.myFilter = function (callback) {
	const result = []

	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			result.push(this[i])
		}
	}

	return result
}

let myFilterResult = bigWords.myFilter((word) => word.length > 5)
console.log("Woop woop ", myFilterResult)

Array.prototype.forEach = function () {
	return "hmmmm"
}
/**
 * Cannot compare objects, this will always return false
 */
// console.log([1] === [1])
// console.log({} === {})

const dogs = ["Pablo", "Izmir", "Brutus"]
const cats = ["Pitchoune", "Bounty", "Nala", "Leo", "Illiu"]

// const newArray = dogs.concat(cats)
// console.log(newArray)

const newArray = ["George", ...cats, "Something", ...dogs, 5]
console.log(newArray)

const student = {
	name: "Hector",
	age: 28,
	address: {
		city: "Paris",
		zipCode: 75012,
	},
}

const otherStudent = {
	...student,
	name: "Nala",
	age: 3,
	address: { ...student.address, zipCode: 75000 },
}

console.log(otherStudent)

/**
 * Extract individualValues from Arrays or Objects
 * Or destructuring
 */

const cat = {
	name: "Bounty",
	age: 3,
	colors: ["White", "Black"],
}

const catName = cat.name
const catAge = cat.age
const catColors = cat.colors

const { name, colors } = cat
//  "Bounty"   ['Black', 'White']
// console.log(name, colors)

const [, secondColor, thirdColor] = colors

console.log(thirdColor)
