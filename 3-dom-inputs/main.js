const firstInput = document.getElementById("silly")
const subTitle = document.getElementById("subtitle")

firstInput.addEventListener("input", (event) => {
	console.log(event)
	subTitle.textContent += event.data
})

const addGroceryInput = document.getElementById("item")
const importantElement = document.getElementById("important")
const submitButton = document.getElementById("create-item")
const list = document.getElementById("list")

submitButton.addEventListener("click", handleSubmitTwo)

function handleSubmit() {
	/**
	 * Get the value of both inputs
	 * create the li and add the Item
	 * if important is checked, change the color to red
	 * add the li to the list
	 */
	const grocery = addGroceryInput.value
	const itIsImportant = importantElement.checked

	if (!grocery) {
		const errorMessage = "Don't create empty items!"
		document.querySelector("p.error").textContent = errorMessage
		setTimeout(() => {
			document.querySelector("p.error").textContent = ""
		}, 2000)
		return
	}
	console.table({ grocery, itIsImportant })
	const li = document.createElement("li")
	li.textContent = `${grocery}`
	li.innerHTML += `<span> 🗑️ </span>`
	const trash = li.querySelector("span")
	trash.addEventListener("click", (event) => {
		li.remove()
	})
	if (itIsImportant) {
		li.style.color = "red"
	}
	list.append(li)
	resetFields()
}
function handleSubmitTwo() {
	/**
	 * Get the value of both inputs
	 * create the li and add the Item
	 * if important is checked, change the color to red
	 * add the li to the list
	 */
	const grocery = addGroceryInput.value
	const itIsImportant = importantElement.checked

	if (!grocery) {
		return createError("Please submit an item.")
	}
	// console.table({ grocery, itIsImportant })
	const li = createLi(grocery, itIsImportant)

	list.append(li)
	resetFields()
}

function createError(str) {
	const errorMessage = str
	document.querySelector("p.error").textContent = errorMessage
	setTimeout(() => {
		document.querySelector("p.error").textContent = ""
	}, 2000)
}
function resetFields() {
	addGroceryInput.value = ""
	importantElement.checked = false
}

function createLi(grocery, itIsImportant) {
	console.log(grocery)
	const li = document.createElement("li")
	li.textContent = `${grocery}`
	li.innerHTML += `<span> 🗑️ </span>`
	const trash = li.querySelector("span")
	trash.addEventListener("click", (event) => {
		trash.closest("li").remove()
	})
	if (itIsImportant) {
		li.style.color = "red"
	}
	return li
}
