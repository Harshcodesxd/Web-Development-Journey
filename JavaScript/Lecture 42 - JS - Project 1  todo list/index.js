const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");


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


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoValue = todoInput.value.trim(); // trim() for avoding blank task

    if (!todoValue) return; 
     // this for saving

    let newTodo = {
        id: Date.now(),
        text: todoValue,
        isCompleted: false
    }

   /*  addTodo(todoValue); */
    addTodo(newTodo);

    //   renderTodo()  // jab first time file exectue hogi tab existing todos render ho jayenge
});


function renderTodo() {
  /*   todoList.innerHTML = "" */
    todos.forEach(function (todo) {
        addTodo(todo);
    });
}

renderTodo()

function addTodo(todo) {
    const li = document.createElement("li"); // <li></li> (created li)
    // li.textContent = todo // <li> {actuall todo} </li> (added actuall todo in li)
    li.dataset.id = todo.id
    li.classList = `flex gap-2 border border-slate-300 p-4 rounded-xl`
    li.innerHTML = ` <input data-action="toggle" data-id = "${todo.id}" ${todo.isCompleted === true ? 'checked' : ''} type="checkbox">
        <p class="flex-1" > ${todo.text}</p>
            <div class="flex gap-3">
                <button data-action="edit" data-id= ${todo.id}>Edit</button>
                <button data-action="delete" data-id= ${todo.id}>Delete</button>
            </div>`
    todoList.append(li); // ul -> li

}


// event delegation
todoList.addEventListener('click', (e) => {

    let li = e.target.closest('li')
    let btn = e.target.closest('button')
    // console.log(btn?.dataset.action); // we used optional chaning '?' for avoding null
    let action = btn?.dataset.action;
    let id = li?.dataset?.id;
    let checkbox = e.target.closest(`input[type = "checkbox"]`) // css selector to select only checkbox input element
    /* console.log(checkbox); */



    if (action === "edit") {
        // edit wala part krunga yha
        console.log("editing...");
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
        console.log(todos);
    }

    function deleteTodo(e, id) {
        e.target.closest('li').remove() // SELECTED WILL GET DELETED INSTEAD OF FULL LI REFRESH ON SINGLE DELETE

        todos = todos.filter((todo) => {
            if (todo.id !== Number(id)) {
                return todo
            }
        })

        // renderTodo() // ALL LI'S WILL REFRESH IF SOMEONE GET DELETED IT WILL MAKE THE PERFORMANCE SLOW IF THERE ARE 1LAKH TAKS

    }
})