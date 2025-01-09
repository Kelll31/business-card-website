function addContact() {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Куприков Алексей | Интелком
EMAIL:kuprikov@rosintelcom.ru
TEL:+7 (915) 200-99-55
ADR:;;г.Тула, пр-т Ленина, 77, офис 505
END:VCARD
    `;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact.vcf';
    a.click();
    URL.revokeObjectURL(url);
}

document.getElementById('addContactButton').addEventListener('click', addContact);
