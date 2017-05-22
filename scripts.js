const addButton = document.getElementById("add-button") // Get Button
const newItem = document.getElementById("new-item") // Get value from input
const toDoList = document.getElementById("to-do_list") // Get list
const importance = document.getElementById("importance")

// add list item
const newToDoItem = () => {
  const toDoItem = document.createElement("li")
  const removeButton = document.createElement("button")
  removeButton.innerHTML = "remover"
  toDoItem.textContent = newItem.value + ' '
  if (importance.checked === true) {
    toDoItem.appendChild(removeButton)
    toDoList.insertBefore(toDoItem, toDoList.firstChild)
  } else {
  toDoItem.appendChild(removeButton)
  toDoList.appendChild(toDoItem)
  }
  event.preventDefault()
}

// remove list item
const removeToDoItem = () => {
  if (event.target.tagName == 'BUTTON') {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    toDoList.removeChild(li);
  }
}

// on click add list item
addButton.addEventListener("click", function(){
  newToDoItem()
})

// on click remove list item
toDoList.addEventListener('click', (event) => {
  removeToDoItem()
})
