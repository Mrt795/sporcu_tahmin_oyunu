document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

   
    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

   
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert('Bu kullanıcı adı zaten kayıtlı. Lütfen başka bir ad kullanın.');
        return; 
    }

  
    const newUser = { username: username, password: password, score: 0 };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Kayıt başarılı! Şimdi giriş yapabilirsiniz.');


    window.location.href = 'giris.html';
});
