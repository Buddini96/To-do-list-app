const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//add task
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//checking tasks
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//store data in browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//dispaly data when open the browser again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();