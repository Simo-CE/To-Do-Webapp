//Enhanced code
const add = document.querySelector('.add');
//Array to store tasks
let tasks = [];

//Animation, error msg, task icons
const addButtonAnimation = document.querySelector('.add');
const error = document.querySelector('#error');
const taskIcons = document.querySelector('.taskIcons');

//Task input
const taskInput = document.querySelector('#taskInput');

//todo | completed
const taskList = document.querySelector('.taskList');
const compTask = document.querySelector('.compTask');


add.addEventListener('click', addTodo);
function addTodo() {
    addButtonAnimation.classList.add('animation');
    //Check task not empty
    if (taskInput.value !== "") {
        console.log('task added successfully');
        //constructing todo object
        const todo = {
            id: Date.now(),
            name: taskInput.value,
            completed: false
        };

        //Add task to tasks array
        tasks.push(todo);
        //Render tasks to ul
        addToLocalStorage(tasks);
        //Clearing the textInput
        taskInput.value = '';
        console.log(tasks);
        //location.reload();
    } else {
        console.log('empty input');
        error.innerHTML = 'Please enter a non empty task!'
        error.classList.add('error');
        setTimeout(() => error.remove(), 3000);
    }
}

//Render tasks to screen
function renderTasks(tasks) {
    //clearing the list
    //document.querySelector('#ul').innerHTML = '';
    taskList.innerHTML = '';
    compTask.innerHTML = '';

    tasks.forEach(item => {
        // making the list: li
        const li = document.createElement('li');
        //li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);

        //Add task value
        li.appendChild(document.createTextNode(`${item.name}`));

        icons(li);

        //adding task to ul tasks list
        if (item.completed === false) {
            taskList.appendChild(li);
        }

        //Adding the completed task 
        if (item.completed === true) {
            compTask.appendChild(li);
        }
    });
}

//Check and remove icons function
function icons(li) {
    const spanrm = document.createElement('span');
    const spanck = document.createElement('span');
    spanrm.classList.add('removeIcon');
    spanck.classList.add('checkIcon');
    //Adding check and remove icons
    li.appendChild(spanrm);
    li.appendChild(spanck);

    spanrm.addEventListener('click', event => {
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
        //li.remove();
    });
    spanck.addEventListener('click', event => {
        toggle(event.target.parentElement.getAttribute('data-key'));
    })
}

//Add tasks to local storage
function addToLocalStorage(tasks) {
    // conver the array to string then store it.
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // render to screen
    renderTasks(tasks);
}

//Parse all the items from localStorage
function getFromLocalStorage() {
    const reference = localStorage.getItem('tasks');
    //if reference exists
    if (reference) {
        //converts stringified reference array back to a real array and store it in tasks
        tasks = JSON.parse(reference);
        renderTasks(tasks);
    }
}

// toggle the value to completed and not completed
function toggle(id) {
    tasks.forEach(item => {
        if (item.id == id) {
            // toggle the value
            item.completed = !item.completed;
        }
    });
    addToLocalStorage(tasks);
}

// deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
    // filters out the <li> with the id and updates the todos array
    tasks = tasks.filter(item => item.id != id);
    // update the localStorage
    addToLocalStorage(tasks);
}

//Add icons event listeners
taskList.addEventListener('click', event => {
    // check if the event is on check icon
    if (event.target.classList.type === 'checkIcon') {
        // toggle the state
        toggle(event.target.parentElement.getAttribute('data-key'));
    }
});

//Initially get everything from localStorage
getFromLocalStorage();

//fix completed card bug




/*
add return completed task into to-do list
add total tasks and the completed ones
add clear all button
 */