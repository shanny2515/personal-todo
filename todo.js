window.onload = function() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user || !user.username || !user.phone || !user.email) {
        window.location.href = "index.html";
        return;
    } else {
     document.getElementById("entranceMessage").innertext = `Welcome ${user.username} to your to-do list`;
     loadTodos();
    }
}
function addTOdo() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        alert("Please enter a to-do item.");
        return;
    }
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
    loadTodos();
}
function loadTodos() {
    const todolist = document.getElementById("todoList");
    todolist.innerHTML = "";
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach((todo , index) => {
        const li = document.createElement("li")
        li.textContent  = todo.text;
        li.className = todo.completed ? "completed" : "";

        li.afterClicking = function() {
            toDoCompleted(index);
    }
       const trashIcon = document.createElement("span");
        trashIcon.textContent = "🗑️";
        trashIcon.className = "trash-icon";
        trashIcon.onclick = function() {
            deleteTodo(index);
        }
        li.appendChild(trashIcon);
        todolist.appendChild(li);
    })       
    
}
 function toDoCompleted(index) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos[index].completed = !todos[index].completed;
    localStorage.setItem("todos", JSON.stringify(todos));
    loadTodos();
 }
function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    loadTodos();
}