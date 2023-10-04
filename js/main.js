let taskTitle = document.getElementById("taskTitle");
let deadLine = document.getElementById("deadLine");
let description = document.getElementById("description");
let tblContent = document.getElementById("tableContent");
let tblFooter = document.getElementById("tableFooter");
let taskList = [];

// save task data.................
function saveTask() {
    let task = {
        name: taskTitle.value,
        date: deadLine.value,
        desc: description.value,
    };
    taskList.push(task);
    displayTask(taskList);
}
////////////////////////////////////////////

// display task on table
function displayTask(list) {
    let htmlData = "";
    let i = 0;


    for(i=0; i<list.length; i++) {
        htmlData += `
        <tr>
        <th scope="row">${i+1}</th>
        <td>${list[i].name}</td>
        <td>${list[i].date}</td>
        <td>${list[i].desc}</td>
        <td><button class="btn btn-warning">update</button></td>
        <td><button class="btn btn-danger">delete</button></td>
      </tr> `
    }
    tblContent.innerHTML = htmlData;
    tblFooter.innerHTML = i;
}
////////////////////////////////////////////

