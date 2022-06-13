const todoform = document.getElementById("todo-form");
const todoinput = document.querySelector("#todo-form input")
const todolist = document.getElementById("todo-list");

function painttodo(newtodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newtodo;
    //console.log(li);
    todolist.appendChild(li);
}

function todosubmit(event){
  
    const newtodo = todoinput.value;
    todoinput.value ="";
   
    painttodo(newtodo);
    event.preventDefault();
   // console.log(todoinput.value);
}

todoform.addEventListener("submit",todosubmit);
