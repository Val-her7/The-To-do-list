export function getTask(task) {
    const ADDED_TASK = task.value;
    task.value ="";
    return ADDED_TASK;     
}

export function addTask(task, tasks) {
    const NEWTASK = {
        id: Date.now(),
        task: task,
        completed: false,
    }
    tasks.push(NEWTASK);
    return {tasks: tasks, newtask: NEWTASK};
 }