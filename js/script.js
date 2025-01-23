document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownButton.addEventListener("click", () => {
        dropdownContent.classList.toggle("show");
    });
});

function toggleEmail(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    const emailTextElement = document.getElementById('email-text'); // Получаем элемент с текстом почты
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