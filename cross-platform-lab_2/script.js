// Отримуємо поле уведення та інші елементи
const goalInput = document.getElementById("goalInput");
const addGoalButton = document.getElementById("addGoalButton");
const goalsList = document.getElementById("goalsList");
const message = document.getElementById("message");

// Функція для виведення повідомлень користувачу
function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}

// Функція створення HTML-елемента для фітнес-цілі
function createGoalElement(goalText) {
    const goalItem = document.createElement("li");
    goalItem.className = "note-item";

    const textSpan = document.createElement("span");
    textSpan.className = "note-text";
    textSpan.textContent = goalText;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Видалити";

    // Обробник для видалення цілі
    deleteButton.addEventListener("click", function () {
        goalItem.remove();
        showMessage("Ціль видалено.", "#681818");
    });

    goalItem.appendChild(textSpan);
    goalItem.appendChild(deleteButton);

    return goalItem;
}

// Функція додавання нової цілі до списку
function addGoal() {
    const goalText = goalInput.value.trim();

    if (goalText === "") {
        showMessage("Будь ласка, введіть вашу фітнес-ціль.", "#781616");
        return;
    }

    const goalElement = createGoalElement(goalText);
    goalsList.appendChild(goalElement);

    goalInput.value = "";
    goalInput.focus();
    showMessage("Ціль успішно додано!", "#0f5928");
}

// Додаємо обробники подій
addGoalButton.addEventListener("click", addGoal);

goalInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addGoal();
    }
});