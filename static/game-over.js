document.addEventListener('DOMContentLoaded', () => {
    const reasonEl = document.getElementById('reason');
    const statsEl = document.getElementById('stats');

    if (reasonEl) {
        reasonEl.textContent = 'Reason: ' + (localStorage.getItem('gameOverReason') || 'Unknown');
    }

    if (statsEl) {
        statsEl.innerHTML = `
            Gold earned: ${localStorage.getItem('goldEarned') || 0}<br>
            Enemies killed: ${localStorage.getItem('enemiesKilled') || 0}<br>
            Towers placed: ${localStorage.getItem('towersPlaced') || 0}<br>
            Waves survived: ${localStorage.getItem('wavesSurvived') || 0}
        `;
    }

    const startNewBtn = document.getElementById('btnStartNew');
    if (startNewBtn) {
        startNewBtn.addEventListener('click', () => {
            window.location.href = '/game';
        });
    }

    const menuBtn = document.getElementById('btnBackToMenu');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            window.location.href = '/';
        });
    }
});
