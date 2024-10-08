// טעינת Firebase והגדרת Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// מאזין לאירוע DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // שליפת משימות קיימות מ-Firestore בעת טעינת הדף
    getDocs(collection(db, "tasks"))
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const task = doc.data();
                const taskItem = document.createElement('li');
                taskItem.textContent = `${task.title} - קטגוריה: ${task.category}, עדיפות: ${task.priority}`;
                taskList.appendChild(taskItem);
            });
        })
        .catch((error) => {
            console.error("שגיאה בשליפת המשימות: ", error);
        });

    // יצירת קישורים לטופס והמשימות
    const taskForm = document.getElementById('add-task-form');
    const taskList = document.getElementById('tasks');

    // מאזין לאירוע שליחת טופס
    taskForm.addEventListener('submit', function (event) {
        event.preventDefault(); // מונע את הרענון הדף

        // קבלת פרטי המשימה
        const title = document.getElementById('task-title').value;
        const category = document.getElementById('task-category').value;
        const priority = document.getElementById('task-priority').value;

        // שמירה ב-Firestore
        addDoc(collection(db, "tasks"), {
            title: title,
            category: category,
            priority: priority
        })
            .then(() => {
                console.log("המשימה נשמרה בהצלחה!");
                // יצירת אלמנט חדש למשימה
                const taskItem = document.createElement('li');
                taskItem.textContent = `${title} - קטגוריה: ${category}, עדיפות: ${priority}`;
                taskList.appendChild(taskItem);
            })
            .catch((error) => {
                console.error("שגיאה בשמירת המשימה: ", error);
            });

        // איפוס הטופס
        taskForm.reset();
    });
});

