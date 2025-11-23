// Opens the Edit Menu
const editButton = document.getElementsByClassName("editButton");
const editorForm = document.getElementsByClassName("editorForm");

for (let i = 0; i < editButton.length; i++){
    editButton[i].addEventListener("click", function(event) {
        event.preventDefault(); 
        editButton[i].setAttribute("hidden", "True");
        editorForm[i].removeAttribute("hidden");
    });
}

// Validates the Task Input
const task = document.getElementById("task");
const taskbutton = document.getElementById("taskButton");

taskbutton.addEventListener("click", function(event) {
        if (task.value.trim() === ""){
            alert ("Please enter a task.");
            event.preventDefault();
        }
});

// Validates the Edited Input
const editTask = document.getElementsByClassName("editTask");
const confirmButton = document.getElementsByClassName("confirmButton");

for (let i = 0; i < confirmButton.length; i++){
    confirmButton[i].addEventListener("click", function(event) {
        if (editTask[i].value.trim() === ""){
            alert ("Please enter a task.");
            event.preventDefault(); 
        }
    });
}