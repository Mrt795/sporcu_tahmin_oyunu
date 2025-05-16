document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;


    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];


    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Giriş başarılı! Hoş geldiniz.');
        localStorage.setItem('currentUser', username); 
        window.location.href = 'game.html'; 
    } else {
        alert('Hatalı kullanıcı adı veya şifre!');
    }
});