function updateCanvasHeight() {
    const canvas = document.querySelector('.canvas');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (canvas && dropdownContent) {
        if (dropdownContent.classList.contains('show')) {
            setTimeout(() => {
                const pageHeight = Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                );
                canvas.style.height = `${pageHeight}px`;
                canvas.style.position = `absolute`;
            }, 500);
        } else {
            canvas.style.position = `fixed`;
            canvas.style.height = '100%';
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener("click", () => {
            dropdownContent.classList.toggle("show");
            updateCanvasHeight();
        });
    } else {
        console.error("Элементы .dropdown-button или .dropdown-content не найдены в DOM.");
    }
});

const originalEmail = "kuprikov@rosintelcom.ru";

function showCopyText() {
    const emailTextElement = document.getElementById('email-text');
    if (emailTextElement) {
        emailTextElement.textContent = "Скопировать";
    }
}

function restoreEmailText() {
    const emailTextElement = document.getElementById('email-text');
    if (emailTextElement) {
        emailTextElement.textContent = originalEmail;
    }
}

function toggleEmail(event) {
    event.preventDefault();

    const emailTextElement = document.getElementById('email-text');
    if (!emailTextElement) {
        console.error("Элемент с id 'email-text' не найден.");
        return;
    }

    navigator.clipboard.writeText(originalEmail).then(() => {
        emailTextElement.textContent = "Скопировано!";
        setTimeout(() => {
            emailTextElement.textContent = originalEmail;
        }, 2000);
    }).catch(err => {
        console.error('Ошибка при копировании текста: ', err);
    });
}