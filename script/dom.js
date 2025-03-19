export function createNewTask(task) {

    const LI = document.createElement("li");
    LI.innerHTML = `
    <input type="checkbox">
    <label>${task}</label>
    <button>Delete</button>`

    return LI; 
}

