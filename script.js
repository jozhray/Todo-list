document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter a task.");
    } else if(document.querySelector('#newtask input').value.length >25) {  
        alert("Task name is too long. Please limit it to 25 characters.");
    } else {
        for (let i = 0; i < document.querySelectorAll('.task').length; i++) {
            if (document.querySelectorAll('.task')[i].innerText === document.querySelector('#newtask input').value) {
                alert("This task already exists, Please enter a different task.");
                return;
            }
        }
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt" ></i>
                </button>
            </div>
        `;

        let current_tasks = document.querySelectorAll('.delete');
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll('.task');
        for (let i = 0; i < tasks.length; i++) {    
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }

        let inputField = document.querySelector('#newtask input');
        inputField.value = ""; // Clear the input field after adding a task     
    }
}