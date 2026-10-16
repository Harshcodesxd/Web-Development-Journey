
let todos = ['Go to GYM', "Revision Web Dev", "Take class"]

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")

todoForm.addEventListener('submit' , (e) => {
    e.preventDefault()

    const todoValue = todoInput.value;
    todos.push(todoValue)
})

todos.forEach(function (todo) {
    const li = document.createElement("li") // <li></li> (created li)
    li.textContent = todo // <li> {actuall todo} </li> (added actuall todo in li)
    todoList.append(li) // ul -> li
})


console.log(todos);
