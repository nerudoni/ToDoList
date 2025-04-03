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
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
    }

}

tasks.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});