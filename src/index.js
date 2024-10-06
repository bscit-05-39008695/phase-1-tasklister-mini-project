// Select the form and task list elements
const form = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get input values
  const taskDescription = document.getElementById('new-task-description').value.trim();
  const taskUser = document.getElementById('task-user').value.trim();
  const taskDuration = document.getElementById('task-duration').value.trim();
  const taskDueDate = document.getElementById('task-due-date').value;

  // Check if the task description is not empty
  if (taskDescription !== "") {
    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>Description:</strong> ${taskDescription} 
      <strong>User:</strong> ${taskUser} 
      <strong>Duration:</strong> ${taskDuration} 
      <strong>Due:</strong> ${taskDueDate}
    `;

    // Create edit and delete buttons
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    
    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(li); // Remove the task from the list
    });

    // Add an event listener to the edit button
    editButton.addEventListener('click', function() {
      document.getElementById('new-task-description').value = taskDescription;
      document.getElementById('task-user').value = taskUser;
      document.getElementById('task-duration').value = taskDuration;
      document.getElementById('task-due-date').value = taskDueDate;

      // Remove the task from the list
      taskList.removeChild(li);
    });

    // Append buttons to the list item
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Append the new task to the DOM
    taskList.appendChild(li);

    // Clear the input fields
    form.reset();
  }
});
