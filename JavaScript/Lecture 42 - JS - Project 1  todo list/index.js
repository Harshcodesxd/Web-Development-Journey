// 'Go to GYM', "Revision Web Dev", "Take class"
let todos = [
    {
        id: Date.now(),
        text: "Go to gym",
        isCompleted: false
    },
    {
        id: Date.now(),
        text: "Revision Web Dev",
        isCompleted: false
    },
    {
        id: Date.now(),
        text: "Take Class",
        isCompleted: false
    },
    {
        id: Date.now(),
        text: "Eat Healthy",
        isCompleted: false
    }
];

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoValue = todoInput.value;
    todos.push(todoValue); // this for saving

    let NewTodo = {
        id: Date.now(),
        text: todoValue,
        isCompleted: false
    }

    addTodo(todoValue);

    //   renderTodo()  // jab first time file exectue hogi tab existing todos render ho jayenge
});

function renderTodo() {
    todos.forEach(function (todo) {
        addTodo(todo);
    });
}

renderTodo()

function addTodo(todo) {
    const li = document.createElement("li"); // <li></li> (created li)
    // li.textContent = todo // <li> {actuall todo} </li> (added actuall todo in li)
    li.classList = `flex gap-2 border border-slate-300 p-4 rounded-xl`
    li.innerHTML = `  
                
                <input data-id = ${todo.id} type="checkbox">
                <p class="flex-1">${todo.text}</p>
                <div class="flex gap-3">
                    <button data-action="edit" data-id = ${todo.id}>Edit</button>
                    <button data-action="delete" data-id = ${todo.id}>Delete</button>
                </div>
            </li>`;
    todoList.append(li); // ul -> li
}


// event delegation
todoList.addEventListener('click', (e) => {

    let btn = e.target.closest('button')
    // console.log(btn?.dataset.action); // we used optional chaning '?' for avoding null
    let action = btn?.dataset.action;
    let id = btn?.dataset?.id;



    if (action === "edit") {
        // edit wala part krunga yha
        console.log("editing...");
    }

    if (id === "delete") {
        console.log("deleting...");

        todos = todos.filter((todo) => {
           if(todo.id !== Number(id)) {
            return todo
           }

        })

    }

})