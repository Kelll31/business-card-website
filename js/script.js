function addContact() {
    if (navigator.contacts && navigator.contacts.save) {
        const contact = {
            name: 'Куприков Алексей | Интелком',
            email: 'kuprikov@rosintelcom.ru',
            tel: '+7 (915) 200-99-55',
            address: 'г.Тула, пр-т Ленина, 77, офис 505'
        };
        navigator.contacts.save(contact).then(() => {
            alert('Контакт успешно добавлен!');
        }).catch((error) => {
            alert('Ошибка при добавлении контакта: ' + error);
        });
    } else {
        alert('Ваше устройство не поддерживает добавление контактов.');
    }
}