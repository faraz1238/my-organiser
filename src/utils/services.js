export function getContacts() {
    const contacts = localStorage.getItem('contacts')
    if (contacts) {
        return JSON.parse(contacts)
    }
    return []
}

export function getTasks() {
    const tasks = localStorage.getItem('tasks')
    if (tasks) {
        return JSON.parse(tasks)
    }
    return []
}