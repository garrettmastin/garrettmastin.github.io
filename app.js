let scores = {
    player1: { wins: 0, losses: 0, streak: 0 },
    player2: { wins: 0, losses: 0, streak: 0 }
};

function updateDisplay() {
    document.getElementById('player1-wins').innerText = scores.player1.wins;
    document.getElementById('player1-losses').innerText = scores.player1.losses;
    document.getElementById('player1-streak').innerText = scores.player1.streak;

    document.getElementById('player2-wins').innerText = scores.player2.wins;
    document.getElementById('player2-losses').innerText = scores.player2.losses;
    document.getElementById('player2-streak').innerText = scores.player2.streak;
}

function recordWin(winner) {
    let loser = winner === 1 ? 2 : 1;

    scores[`player${winner}`].wins++;
    scores[`player${winner}`].streak = scores[`player${winner}`].streak >= 0 ? scores[`player${winner}`].streak + 1 : 1;
    
    scores[`player${loser}`].losses++;
    scores[`player${loser}`].streak = scores[`player${loser}`].streak <= 0 ? scores[`player${loser}`].streak - 1 : -1;
    
    updateDisplay();
    localStorage.setItem('scores', JSON.stringify(scores));
}

function loadScores() {
    let savedScores = localStorage.getItem('scores');
    if (savedScores) {
        scores = JSON.parse(savedScores);
        updateDisplay();
    }
}

document.addEventListener('DOMContentLoaded', loadScores);
