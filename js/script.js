document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownButton.addEventListener("click", () => {
        dropdownContent.classList.toggle("show");
    });
});

function toggleEmail(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    const emailText = document.getElementById('email-text').textContent; // Получаем текст почты
    const tooltip = document.getElementById('tooltip'); // Получаем элемент всплывающего окна

    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(emailText).then(() => {
        // Показываем всплывающее окно
        tooltip.classList.add('show');

        // Скрываем всплывающее окно через 2 секунды
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Ошибка при копировании текста: ', err);
    });
}