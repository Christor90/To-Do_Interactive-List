//Getting all required elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//If the inputbox is empty, it pop-up an alert "you must write something"
function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

//adding an x button (close button) span
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
//once you input the text, the text leaves the input box
    inputBox.value = "";
    saveData();
} 

//click function for check and uncheched task (if completed or not)
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//storing the task on our Browser(once refreshed will not delete)
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//display the data once the website is open again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
