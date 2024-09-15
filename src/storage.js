
// Initialize counters and example task status
localStorage.setItem('projectId', 0);
localStorage.setItem('taskId', 0);
localStorage.setItem('exampleRemove', false);

export let projectId = parseInt(localStorage.getItem('projectId'));
export let taskId = parseInt(localStorage.getItem('taskId'));

// Project array that will hold project objects
export let projects = [];
localStorage.setItem('projects', JSON.stringify(projects));

export function AddProject(id, title, tasks) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
};

export function createProject(id, title, tasks) {

    let newProject = new AddProject(id, title, tasks);

    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));

    projectId++;
    localStorage.setItem('projectId', projectId.toString());
    console.log(localStorage);
};

// Task object to push task into task array of project
export function AddTask(id, title, description, date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
};

// Date
let currentDate = new Date();
//     currentDate.setHours(0, 0, 0, 0);
//     date.setHours(0, 0, 0, 0);
//     date.setDate(date.getDate());
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     let formattedDate = `${month}/${day}/${year}`;

// Create object for example task to push onto general project
export const exampleTask = new AddTask(0, 'Example', 'This is an example task', currentDate)





// Load stored tasks from general project onto screen on refresh - check for example card validity

