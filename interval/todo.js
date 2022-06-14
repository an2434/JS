const todoform = document.getElementById("todo-form");
const todoinput = document.querySelector("#todo-form input")
const todolist = document.getElementById("todo-list");
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
   
    painttodo(newtodo);
    event.preventDefault();
   // console.log(todoinput.value);
}

todoform.addEventListener("submit",todosubmit);
