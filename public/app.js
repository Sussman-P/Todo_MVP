const taskContainer = document.querySelector(".tasks");
const createTaskBtn = $(".submit");

fetch("/api/tasks")
	.then((res) => res.json())
	.then((tasks) => {
		for (let task of tasks) {
			const taskDiv = document.createElement("div");
			taskDiv.className = "task-items";
			const h2 = document.createElement("h2");
			h2.textContent = task.description;
			taskDiv.append(h2);

			if (task.priority > 2) {
				console.log(`${task.description} is a high priority task`);
				const h3 = document.createElement("h3");
				h3.className = "priority";
				h3.textContent = "(This is a high priority task!!!)";
				taskDiv.append(h3);
			}
			taskContainer.appendChild(taskDiv);
		}

		createTaskBtn.on("click", () => {
			console.log("Task created!");
		});
		console.log("task description", tasks);
	});
