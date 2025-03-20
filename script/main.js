import { NEW_TASK, SUBMIT_BUTTON, TASK_LIST } from "./constants.js";
import { createNewTask } from "./dom.js";
import { addTask, getTask, markTaskCompleted } from "./functions.js";
import { createStorage, getStorage } from "./storage.js";

window.onload = function() {
    for(let element of getStorage()) {
        const LI = createNewTask(element.task, element.id, element.completed);
        TASK_LIST.appendChild(LI);
    }
}

SUBMIT_BUTTON.addEventListener("click", () => {
    const INPUT = document.getElementsByClassName("main__input")[0];
    INPUT.focus();
    const TASK = getTask(NEW_TASK); 
    const TASKS = getStorage();
    const { tasks, newtask} = addTask(TASK, TASKS);
    createStorage(tasks);
    const LI = createNewTask(TASK, newtask.id, newtask.completed);
    TASK_LIST.appendChild(LI);
});

TASK_LIST.addEventListener("click", (e) => {
    const TARGET = e.target;
    if(TARGET.tagName === "INPUT") {
        markTaskCompleted(TARGET.id, getStorage, createStorage); 
        const TASKS = getStorage();
        for(let task of TASKS) {
            if(TARGET.id === task.task) {
                const DELETE = TARGET.nextElementSibling.nextElementSibling;
                if(DELETE.className ==="btn-invisible") {
                    DELETE.className = "btn-visible";
                } else {
                    DELETE.className = "btn-invisible";
                } 
            }
        } 
    }
    if(TARGET.tagName ==="BUTTON") {
        const TASKS = getStorage();
        for(let task of TASKS) {
            if(Number(TARGET.id) === task.id) {
                const LI = TARGET.parentNode;
                TASK_LIST.removeChild(LI);
                let index = TASKS.indexOf(task);
                TASKS.splice(index, 1);
                createStorage(TASKS);     
            }   
        }     
    }   
} )

