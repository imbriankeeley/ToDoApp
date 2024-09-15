
// Initialize counters and example task status
localStorage.setItem('projectId', 0);
localStorage.setItem('taskId', 0);
localStorage.setItem('exampleRemove', false);

export let projectId = localStorage.getItem('projectId');
export let taskId = localStorage.getItem('taskId');

// Project array that will hold project objects
const projects = [];
localStorage.setItem('project', JSON.stringify(projects));

export function AddProject(id, title, tasks) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
};

export function createProject(id, title, tasks) {

    let newProject = AddProject(id, title, tasks);

    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));

    let newId = projectId++;
    localStorage.setItem('projectId', newId);
    console.log(localStorage);
};

// Task object to push task into task array of project
export function AddTask(id, title, description, date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
};

