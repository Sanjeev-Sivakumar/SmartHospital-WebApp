const users = [
    { username: 'keshav', password: '1234', role: 'nurse' },
    { username: 'puveesh', password: '4567', role: 'nurse' }
];

function login() {
    const username = document.getElementById('un').value;
    const password = document.getElementById('pwd').value;
    const errorMessage = document.getElementById('error-message');

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        window.location.href = 'NurseMain.html';
    } else {
        errorMessage.style.display = 'block';
    }
}
