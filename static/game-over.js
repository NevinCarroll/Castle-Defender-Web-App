/**
 * game-over.js - shows final stats and navigation on game over page.
 */
/**
 * game-over.js - shows final stats and navigation on game over page.
 *
 * Reads values saved to LocalStorage by Game#gameOver() and renders to the page.
 */
document.addEventListener('DOMContentLoaded', () => {
    const reasonEl = document.getElementById('reason');
    const statsEl = document.getElementById('stats');

    if (reasonEl) {
        reasonEl.textContent = 'Reason: ' + (localStorage.getItem('gameOverReason') || 'Unknown');
    }

    // Stats of player at time of game over
    if (statsEl) {
        statsEl.innerHTML = `
            Gold earned: ${localStorage.getItem('goldEarned') || 0}<br>
            Enemies killed: ${localStorage.getItem('enemiesKilled') || 0}<br>
            Towers placed: ${localStorage.getItem('towersPlaced') || 0}<br>
            Waves survived: ${localStorage.getItem('wavesSurvived') || 0}
        `;
    }

    // Start new game button: navigates back to gameplay.
    const startNewBtn = document.getElementById('btnStartNew');
    if (startNewBtn) {
        startNewBtn.addEventListener('click', () => {
            window.location.href = '/game';
        });
    }

    // Back to main menu
    const menuBtn = document.getElementById('btnBackToMenu');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            window.location.href = '/';
        });
    }
});
