import { NEW_TASK, SUBMIT_BUTTON, TASK_LIST } from "./constants.js";
import { createNewTask } from "./dom.js";
import { addTask, getTask } from "./functions.js";
import { createStorage, getStorage } from "./storage.js";

window.onload = function() {
    for(let element of getStorage()) {
        const LI = createNewTask(element.task);
        TASK_LIST.appendChild(LI);
    }
}

SUBMIT_BUTTON.addEventListener("click", () => {
    const TASK = getTask(NEW_TASK);
    const LI = createNewTask(TASK);
    TASK_LIST.appendChild(LI); 
    const TASKS = getStorage();
    createStorage(addTask(TASK, TASKS));
});

