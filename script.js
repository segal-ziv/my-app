document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('add-task-form');
    const taskList = document.getElementById('tasks');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // מונע את רענון הדף

        // קבלת פרטי המשימה
        const title = document.getElementById('task-title').value;
        const category = document.getElementById('task-category').value;
        const priority = document.getElementById('task-priority').value;

        // יצירת אלמנט חדש לרשימה
        const taskItem = document.createElement('li');
        taskItem.textContent = `${title} - קטגוריה: ${category}, דחיפות: ${priority}`;
        
        // הוספת המשימה לרשימה
        taskList.appendChild(taskItem);

        // איפוס הטופס
        taskForm.reset();
    });
});
