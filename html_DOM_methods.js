const taskListContainer = document.createElement('div');
taskListContainer.id = 'task-list-container';
taskListContainer.classList = 'list-wrapper';

const taskList = document.createElement('ul');
taskList.id = 'task-list';
taskList.className = 'list card-container';

const taskListItem1 = document.createElement('li');
taskListItem1.classList = 'task-list-item card';
taskListItem1.textContent = 'Go grocery shopping';

const taskListItem2 = document.createElement('li');
taskListItem2.classList = 'task-list-item card';
taskListItem2.textContent = 'Call mom';

// More list items as needed...

taskList.appendChild(taskListItem1);
taskList.appendChild(taskListItem2);
taskListContainer.appendChild(taskList);

// Add to document
