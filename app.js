let pendingTask = 0;
let doneTask = 0;
let totalTask = 0;

function addTask() {

    if (document.getElementById("taskInput").value != "") {

        // Insert <li> in <ul>
        let newTask = document.getElementById("taskInput").value;
        var text = document.createTextNode(newTask);
        var li = document.createElement("li");
        li.appendChild(text);
        li.className = "liElement";
        var ul = document.getElementById("tasksList");
        ul.appendChild(li);
        document.getElementById("taskInput").value = "";
        pendingTask = pendingTask + 1

        // Add a delete button to the list item (affects the counter)
        var buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Done";
        buttonDelete.className = "delete-button";
        buttonDelete.addEventListener("click", function () {
            ul.removeChild(li);
            doneTask = doneTask + 1
            totalTask = pendingTask - doneTask
            document.getElementById("counter").innerHTML = "You have " + totalTask + " pending tasks out of " + pendingTask + "."

        });
        li.appendChild(buttonDelete);

        //Show status message
        totalTask = pendingTask - doneTask
        document.getElementById("counter").innerHTML = "You have " + totalTask + " pending tasks out of " + pendingTask + "."

    }

}

//Reset app
function reset() {
    document.getElementById("taskInput").value = "";
    document.getElementById("tasksList").innerHTML = "";
    pendingTask = 0;
    doneTask = 0;
    totalTask = 0;
    document.getElementById("counter").innerHTML = "";
}