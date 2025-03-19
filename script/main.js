import { NEW_TASK, SUBMIT_BUTTON, TASK_LIST } from "./constants.js";
import { createNewTask } from "./dom.js";
import { addTask, getTask } from "./functions.js";
import { createStorage, getStorage } from "./storage.js";

window.onload = function() {
    for(let element of getStorage()) {
        const LI = createNewTask(element.task, element.id);
        TASK_LIST.appendChild(LI);
    }
}

SUBMIT_BUTTON.addEventListener("click", () => {
    const TASK = getTask(NEW_TASK); 
    const TASKS = getStorage();
    const { tasks, newtask} = addTask(TASK, TASKS);
    createStorage(tasks);
    const LI = createNewTask(TASK, newtask.id);
    TASK_LIST.appendChild(LI);
});

