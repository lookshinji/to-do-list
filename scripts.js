const addButton = document.getElementById("insertButton"); //Get Button
const item = document.getElementById("newListItem"); //Get value from input
const ul = document.getElementById("to-do_list");

const newListItem = () => {
  const value = item.value
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  ul.appendChild(li)
  event.preventDefault()
}

//On click append to ul list
addButton.addEventListener("click", function(){
  newListItem()
});
