let patientsDatabase = [
    { code: "PT-001", name: "Puveesh", appointment: "2024-11-15 10:00 AM" },
    { code: "PT-002", name: "Lokes", appointment: "2024-11-16 14:30 PM" },
    { code: "PT-003", name: "Sameeth", appointment: "2024-11-17 09:00 AM" },
    { code: "PT-004", name: "Priyanka", appointment: "2024-12-12 15.35 AM" }
];

let tasks = [];

function searchPatient() {
    const patientCode = document.getElementById("ptcode").value;
    const ptDetails = document.getElementById("ptdetails");
    ptDetails.innerHTML = '';
    const patient = patientsDatabase.find(pt => pt.code === patientCode);

    if (patient) {
        ptDetails.innerHTML = `
            <h3>Patient Details</h3>
            <p><strong>Name:</strong> ${patient.name}</p>
            <p><strong>Appointment:</strong> ${patient.appointment}</p>
        `;
    } else {
        ptDetails.innerHTML = `<p>Patient not found. Please check the code.</p>`;
    }
}

function addTask() {
    const taskInput = document.getElementById("task-input");
    const dueDateInput = document.getElementById("due-date");
    const dueTimeInput = document.getElementById("due-time");
    const taskDescription = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const dueTime = dueTimeInput.value;

    if (!taskDescription || !dueDate || !dueTime) {
        alert("Please enter both task description, due date, and time.");
        return;
    }

    const task = {
        description: taskDescription,
        dueDate: dueDate,
        dueTime: dueTime
    };

    tasks.push(task);
    displayTasks();
    taskInput.value = '';
    dueDateInput.value = '';
    dueTimeInput.value = '';
}

function displayTasks() {
    const taskGrid = document.querySelector(".todogrid");
    taskGrid.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskHTML = `
            <div>
                <p>${task.description}</p>
                <span>Due Date: ${task.dueDate} ${task.dueTime}</span>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskGrid.insertAdjacentHTML('beforeend', taskHTML);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
