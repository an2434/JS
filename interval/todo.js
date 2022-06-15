const todoform = document.getElementById("todo-form");
const todoinput = document.querySelector("#todo-form input")
const todolist = document.getElementById("todo-list");

const todos = [];

const TODOS_KEY ="todos";

function savetodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
   
}

function deletetodo(){
    const li = event.target.parentElement;
    li.remove();
}

function painttodo(newtodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newtodo;
    const button =document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click",deletetodo);
    li.appendChild(span);
    li.appendChild(button);

   
    //console.log(li);
    todolist.appendChild(li);
}

function todosubmit(event){
  
    const newtodo = todoinput.value;
    todoinput.value ="";
    todos.push(newtodo);
    painttodo(newtodo);
    savetodos();
    event.preventDefault();
   // console.log(todoinput.value);
}

todoform.addEventListener("submit",todosubmit);



const savetodos = localStorage.getItem(TODOS_KEY);
console.log(savetodos);
if(savetodos !== null){
    const parsedtodos = JSON.parse(savetodos);
    parsedtodos.forEach(element => {
        
    });
}
