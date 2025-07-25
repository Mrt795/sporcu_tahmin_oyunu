const sports = {
    futbol: [
        { isim: "Lionel Messi", yas: 36, ulke: "Arjantin", takim: "Inter Miami" },
        { isim: "Cristiano Ronaldo", yas: 39, ulke: "Portekiz", takim: "Al-Nassr" },
        { isim: "Kylian Mbappe", yas: 25, ulke: "Fransa", takim: "Paris Saint-Germain" },
        { isim: "Kevin De Bruyne", yas: 33, ulke: "Belçika", takim: "Manchester City" },
        { isim: "Erling Haaland", yas: 24, ulke: "Norveç", takim: "Manchester City" },
        { isim: "Neymar Jr.", yas: 32, ulke: "Brezilya", takim: "Al-Hilal" },
        { isim: "Robert Lewandowski", yas: 36, ulke: "Polonya", takim: "Barcelona" },
        { isim: "Mohamed Salah", yas: 32, ulke: "Mısır", takim: "Liverpool" }
    ]
};

let score = 0;
let attempts = 3;
let selectedPlayer;

function initGame() {
    const randomIndex = Math.floor(Math.random() * sports.futbol.length);
    selectedPlayer = sports.futbol[randomIndex];

    document.getElementById('sport-player').innerHTML = `
        <p><strong>Yaş:</strong> ${selectedPlayer.yas}</p>
        <p><strong>Ülke:</strong> ${selectedPlayer.ulke}</p>
        <p><strong>Takım:</strong> ${selectedPlayer.takim}</p>
    `;

    const buttonsDiv = document.getElementById('buttons');
    buttonsDiv.innerHTML = ""; 

    sports.futbol.forEach(player => {
        const button = document.createElement('button');
        button.textContent = player.isim;
        button.onclick = () => checkAnswer(player.isim, selectedPlayer.isim);
        buttonsDiv.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (attempts <= 0) return;

    if (selected === correct) {
        score += 10;
        alert('Doğru tahmin! +10 Puan');
        initGame(); 
    } else {
        attempts--;
        alert(`Yanlış! Kalan Hak: ${attempts}`);
    }

    if (attempts <= 0) {
        document.getElementById('score-board').style.display = 'block';
        document.getElementById('score').textContent = `Puanınız: ${score}`;

       
        document.querySelectorAll('#buttons button').forEach(btn => btn.disabled = true);

   
        setTimeout(() => {
            alert("Oyun bitti! Spor seçim ekranına yönlendiriliyorsunuz.");
     
            endGameAndSaveScore(score);
            window.location.href = 'game.html'; 
        }, 3000);
    }
}

function endGameAndSaveScore(currentScore) {
    const activeUser = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userIndex = users.findIndex(u => u.username === activeUser);

    if (userIndex !== -1) {
       
        users[userIndex].score += currentScore;
        localStorage.setItem('users', JSON.stringify(users)); 
    }
}


initGame();
