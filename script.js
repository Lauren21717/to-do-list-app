const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/*
 * The addTask function is responsible for adding a new task to a list.
 * It checks if the input box is empty and alerts the user if so.
 * If the input box is not empty, it creates a new list element with
 * the content of the input box and append it to the list container.
 * It also create a span element with a 'x' symbol and append it to the list item.
 * It allowing the user remove the task later.
 * Finally, it clears the input fiels and called the saveData() function.
 */
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

/**
 * When the click event occurs:
 * - If the clicked target element's tag name is "LI",
 *   it toogles the "checked" class on the clicked list item. 
 *   Then called the saveData() function.
 * - If the clicked target element's tag name is "SPAN",
 *   it removes the parent list item from the DOM.
 *   After remove the element, then called the saveData() function.
 */
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

/**
 * Function saveData:
 * Save the current state of tasks in the list container to the browser's localStorage.
 * It stores the inner HTML of the listContainer element under the key "data".
 */
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

/**
 * Function showTask:
 * Retrives previous saved task data from localStorage and displays it in the list container.
 * It sets the inner HTML of the listContainer element to the value store under the key "data".
 */
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();