const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add Task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="done-btn">✔</button>
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;
  taskList.appendChild(li);
  taskInput.value = "";

  // Mark Completed
  li.querySelector('.done-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Edit Task
  li.querySelector('.edit-btn').addEventListener('click', () => {
    const newText = prompt("Edit your task:", li.querySelector('span').innerText);
    if (newText !== null && newText.trim() !== "") {
      li.querySelector('span').innerText = newText;
    }
  });

  // Delete Task
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });
});
