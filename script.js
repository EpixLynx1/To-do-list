const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // click to delete
  li.addEventListener("click", function () {
    li.remove();
  });

  list.appendChild(li);

  input.value = "";
});
