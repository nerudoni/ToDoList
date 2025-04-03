const tasks = document.getElementById("tasks");
const input = document.getElementById("input");

function addTask(){
    if(input.value === ""){
        alert("Please enter a task.");
        return;
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        input.value = ""; 
    }

}