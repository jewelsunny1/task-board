// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

//this allows me to console log the value of the task object onto the local storage//
//this allows me to save this info when it comes to creating task cards//
function taskEl () {
    const enterTitle= document.getElementById('tasktitle').value;
    const enterDesc= document.getElementById('taskdesc').value;
    const enterDue= document.getElementById('taskdue').value;

    const task= {
        title: enterTitle,
        description: enterDesc,
        dueDate: enterDue,  
       
    };
    console.log(task);
    
//im going wrong somewhere with appending the card// Come back to this!
//I created a new element to append the value of task object ontp the task cards//
   const taskCard= document.createElement('div');
   taskCard.classList.add('card');
   taskCard.innerHTML=`
   <div class="card-body">
    <h4 class= "card-title">${task.title}</h5>
    <p class="card-text">${task.description}</p>
    <p class= "card-text"> Due: ${task.dueDate}</p>
    </div>
   
 `;
//taskcard is appended to the parent document//
 document.body.appendChild(taskCard);

 $(taskCard).draggable({
    cursor: 'move',
 });

 document.getElementById('tasktitle').value='';
 document.getElementById('taskdesc').value='';
 document.getElementById('taskdue').value='';
    
}

const submit= document.getElementById('submit')
submit.addEventListener('click',taskEl);
//by adding.droppable, the lanes (to do, in progress, and done) allows the card that is created to be dropped into the lanes
$('.lane').droppable({
    accept: '.card',
    drop: function( event,ui){
        $(this).append(ui.draggable.detach());


    }
});


  
//Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

