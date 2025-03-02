const taskAssignedElem = document.getElementById('task-assigned');
const totalCompletedElem = document.getElementById('total-completed-job');
const resetBtn = document.getElementById('clear-logs');
const completeButtons = document.getElementsByClassName('complete-btn');
const taskLogContainer = document.getElementById('task-log');
let taskAssignedCount = 6;
let totalCompletedCount = 23;

taskAssignedElem.innerText = taskAssignedCount;
totalCompletedElem.innerText = totalCompletedCount;

function addToActivityLog(taskText) {
    const logEntry = document.createElement('p');
    logEntry.innerText = `✅ ${taskText} completed`;
    logEntry.className = 'text-sm text-gray-600 mt-1';
    taskLogContainer.appendChild(logEntry);
}

for (let i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener('click', function (event) {
        const button = event.target;
        if (!button.disabled) {
            taskAssignedCount--;
            totalCompletedCount++;
            taskAssignedElem.innerText = taskAssignedCount;
            totalCompletedElem.innerText = totalCompletedCount;

            button.disabled = true;
            button.innerText = 'Completed';
            addToActivityLog(button.dataset.taskName || `Task ${i + 1}`);
        }
    });
}

resetBtn.addEventListener('click', () => {
    taskAssignedCount = 6;
    totalCompletedCount = 23;

    taskAssignedElem.innerText = taskAssignedCount;
    totalCompletedElem.innerText = totalCompletedCount;
    for (let i = 0; i < completeButtons.length; i++) {
        completeButtons[i].disabled = false;
        completeButtons[i].innerText = 'Complete';
    }
    taskLogContainer.innerHTML = '';
});