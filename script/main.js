import { NEW_TASK, SUBMIT_BUTTON, TASK_LIST } from "./constants.js";
import { createNewTask } from "./dom.js";
import { addTask, getTask } from "./functions.js";
import { createStorage, getStorage } from "./storage.js";

window.onload = function() {
    console.log(getStorage());
}


SUBMIT_BUTTON.addEventListener("click", () => {
    const TASK = getTask(NEW_TASK);
    const LI = createNewTask(TASK);
    TASK_LIST.appendChild(LI); 
    const TASKS = getStorage();
    console.log(TASKS);

});

