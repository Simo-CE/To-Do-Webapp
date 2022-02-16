const task = document.querySelector('.add');
const addButtonAnimation = document.querySelector('.add');
const error = document.querySelector('#error');

const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('.taskList');

const compTask = document.querySelector('.compTask');
const taskIcons = document.querySelector('.taskIcons');

task.addEventListener('click', addTask);
function addTask(e) {
    e.preventDefault();
    addButtonAnimation.classList.add('animation');

    if (taskInput.value === "") {
        console.log('empty input');
        error.innerHTML = 'Please enter a non empty task!'
        error.classList.add('error');
        setTimeout(() => animation.remove(), 3000);
    } else {
        todo();
    }
}

function todo() {
    //Check and remove icons
    const spanrm = document.createElement('span');
    const spanck = document.createElement('span');
    spanrm.classList.add('removeIcon');
    spanck.classList.add('checkIcon');

    //add task to its card
    console.log('task added');
    const li = document.createElement('li');

    //Adding check and remove icons
    li.appendChild(spanrm);
    li.appendChild(spanck);

    //Adding the task value
    li.appendChild(document.createTextNode(`${taskInput.value}`));
    taskList.appendChild(li);

    //Clear input field
    taskInput.value = '';

    //Remove task
    spanrm.addEventListener('click', (e) => {
        li.remove();
    });

    //completed tasks
    spanck.addEventListener('click', (e) => {
        //add task to its card
        console.log('task completed');

        //Adding remove icon
        spanrm.style.right = "2%";
        li.appendChild(spanrm);
        li.removeChild(spanck);

        //Adding the completed task 
        compTask.appendChild(li);
    });
}