document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Проверяем, существуют ли элементы
    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener("click", () => {
            dropdownContent.classList.toggle("show");
        });
    } else {
        console.error("Элементы .dropdown-button или .dropdown-content не найдены в DOM.");
    }
});

function toggleEmail(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    const emailTextElement = document.getElementById('email-text'); // Получаем элемент с текстом почты
    if (!emailTextElement) {
        console.error("Элемент с id 'email-text' не найден.");
        return;
    }

    const originalEmail = emailTextElement.textContent; // Сохраняем оригинальный текст почты

    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(originalEmail).then(() => {
        // Меняем текст на "Скопировано!"
        emailTextElement.textContent = "Скопировано!";

        // Возвращаем оригинальный текст через 2 секунды
        setTimeout(() => {
            emailTextElement.textContent = originalEmail;
        }, 2000);
    }).catch(err => {
        console.error('Ошибка при копировании текста: ', err);
    });
}