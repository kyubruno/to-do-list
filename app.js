const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);



function addTodo(event){
    event.preventDefault();
    // to-do div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //criar LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); 
    //check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class= "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //apagar
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //add na lista
    todoList.appendChild(todoDiv);
    //limpar 
    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;
    //apagar 
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    //check
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed"); 
    }

}