const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const formBtn = document.querySelector("#form-btn");


// 'Go to GYM', "Revision Web Dev", "Take class"
let todos = [
    {
        id: Date.now() + 1,
        text: "Go to gym",
        isCompleted: false
    },
    {
        id: Date.now() + 2,
        text: "Revision Web Dev",
        isCompleted: false
    },
    {
        id: Date.now() + 3,
        text: "Take Class",
        isCompleted: false
    },
    {
        id: Date.now() + 4,
        text: "Eat Healthy",
        isCompleted: false
    }
];

let editTodoId = null // flag

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoValue = todoInput.value.trim();
    if (!todoValue) return; // block empty tasks

    if (editTodoId) {
        todos = todos.map((todo) =>
            todo.id === Number(editTodoId)
                ? { ...todo, text: todoValue }
                : todo
        );
        editTodoId = null;
        formBtn.textContent = "Add";
    } else {
        const newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false
        };
        todos.push(newTodo);
    }

    todoInput.value = "";
    renderTodo();
});


function renderTodo() {
    todoList.innerHTML = ""
    todos.forEach(function (todo) {
        addTodo(todo);
    });
}

renderTodo()

function addTodo(todo) {
    const li = document.createElement("li"); // <li></li> (created li)
    // li.textContent = todo // <li> {actuall todo} </li> (added actuall todo in li)

    li.dataset.id = todo.id // this is original method no jugad

    li.classList = `flex gap-2 border border-slate-300 p-4 rounded-xl`
    li.innerHTML = ` <input data-action="toggle" data-id = "${todo.id}" ${todo.isCompleted === true ? 'checked' : ''} type="checkbox">
        <p class="flex-1" > ${todo.text}</p>
            <div class="flex gap-3">
                <button data-action="edit" data-id= ${todo.id}>Edit</button>
                <button data-action="delete" data-id= ${todo.id}>Delete</button>
            </div>`

    todoList.append(li); // ul -> li

}


// event delegation - 10 jagah nhi lga k 1 jagah lgaya h eventlistener optimised way
todoList.addEventListener('click', (e) => {
    e.stopPropagation();

    let li = e.target.closest('li')
    let btn = e.target.closest('button')
    // console.log(btn?.dataset.action); // we used optional chaning '?' for avoding null
    let action = btn?.dataset.action;
    let id = li?.dataset?.id;
    let checkbox = e.target.closest(`input[type = "checkbox"]`) // css selector to select only checkbox input element
    /* console.log(checkbox); */



    if (action === "edit") {
        startEdit(id);
    }


    if (action === "delete") {
        deleteTodo(e, id)
    }

    if (checkbox) {
        todos = todos.map((todo) => {
            if (todo.id === Number(checkbox?.dataset?.id)) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })

    }

    function deleteTodo(e, id) { // deleting method
        e.target.closest('li').remove() // SELECTED WILL GET DELETED INSTEAD OF FULL LI REFRESH ON SINGLE DELETE

        todos = todos.filter((todo) => {
            if (todo.id !== Number(id)) {
                return todo
            }
        })

        // renderTodo() // ALL LI'S WILL REFRESH IF SOMEONE GET DELETED IT WILL MAKE THE PERFORMANCE SLOW IF THERE ARE 1LAKH TASKS

    }
})

function startEdit(id) {
    editTodoId = id

    let currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) { // finding which todo is clicked for edit
            return todo
        }
    })

    todoInput.value = currentTodo.text // input m add kr diya current todo found kr k
    formBtn.textContent = "Update"
}