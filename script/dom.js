export function createNewTask(task, id, completed) {

    const LI = document.createElement("li");
    LI.classList.add("main__task");
    const STATUS = completed ? "checked": "";
    const VISIBLE = completed ? "btn-visible": "btn-invisible";
    LI.innerHTML = `
    <input type="checkbox" id="${task}" ${STATUS}>
    <label for="${task}">${task}</label>
    <button id="${id}" class="${VISIBLE}">Delete</button>`
    
    return LI; 
}

