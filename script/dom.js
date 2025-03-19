export function createNewTask(task, id) {

    const LI = document.createElement("li");
    LI.innerHTML = `
    <input type="checkbox" id="${task}">
    <label for="${task}">${task}</label>
    <button id="${id}" style="visibility:hidden">Delete</button>`
    
    return LI; 
}

