const todoInput = document.querySelector(".todo_input");
const todobtn = document.querySelector(".todo_btn");
const todoList = document.querySelector(".todo_list");

todobtn.addEventListener("click", todofun);

function todofun(event) {
  //stops the submit
  event.preventDefault();
  if (todoInput.value === "") {
    alert("You have left the space empty");
  } else {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoItem = document.createElement("li");
    todoItem.innerText = todoInput.value;
    todoDiv.classList.add("todo_item");

    todoDiv.append(todoItem);

    const btnO = document.createElement("button");
    btnO.classList.add("btnO");
    btnO.innerText = "EDIT";

    const btnT = document.createElement("button");
    btnT.classList.add("btnT");
    btnT.innerText = "DELETE";
    todoDiv.append(btnO);
    todoDiv.append(btnT);
    todoList.append(todoDiv);
    todoInput.value = "";
  }
}
