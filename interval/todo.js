const todoform = document.getElementById("todo-form");
const todoinput = document.querySelector("#todo-form input")
const todolist = document.getElementById("todo-list");

let todos = [];

const TODOS_KEY = "todos";

function savetodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));

}

function deletetodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function painttodo(newtodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newtodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deletetodo);
    li.appendChild(span);
    li.appendChild(button);
    console.log(li); // 내일 수정
    todolist.appendChild(li);
}

function todosubmit(event) {
    event.preventDefault();
    const newtodo = todoinput.value;
    todoinput.value = "";
    todos.push(newtodo);
    painttodo(newtodo);
    savetodo();

    console.log(todoinput.value);// 내일 수정
}

todoform.addEventListener("submit", todosubmit);



const savetodos = localStorage.getItem(TODOS_KEY);
//console.log(savetodos);
if (savetodos !== null) {
    const parsedtodos = JSON.parse(savetodos);
    todos = parsedtodos;
    parsedtodos.forEach(painttodo);
}
(item) => console.log("this is the trun of", item);

function sayHello(item){

}


// const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";

// const toDos = [];

// function saveToDos() {
//  // localStorage.setItem("todos", JSON.stringify(toDos));
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   li.remove();
// }
// function paintToDo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = newTodo;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }
// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   toDos.push(newTodo);
//   paintToDo(newTodo);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   parsedToDos.forEach((item) => console.log("this is the turn of ", item));
// }