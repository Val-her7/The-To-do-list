export function createStorage(tasks) {
    localStorage.setItem("task", JSON.stringify(tasks));
}

export function getStorage() {
    const tasks = JSON.parse(localStorage.getItem("task")) || [];
    return tasks;
}