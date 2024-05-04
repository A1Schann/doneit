const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(taskText) {
  const taskItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';
  checkbox.addEventListener('change', function() {
    taskTextElem.classList.toggle('completed', checkbox.checked);
  });
  const taskTextElem = document.createElement('span');
  taskTextElem.className = 'task-text';
  taskTextElem.textContent = taskText;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    taskItem.remove();
  });
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskTextElem);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
}
