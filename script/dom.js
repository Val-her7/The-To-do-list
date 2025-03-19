export function createNewTask(task) {

    const LI = document.createElement("li");
    LI.innerHTML = `
    <input type="checkbox" id="${task}">
    <label for="${task}">${task}</label>
    <button style="visibility:hidden">Delete</button>`

    return LI; 
}

