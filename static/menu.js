/**
 * menu.js - controls menu buttons on the main menu page.
 */
/**
 * menu.js - controls menu buttons on the main menu page.
 *
 * This file attaches events for Continue, Start New, Tutorial, Login, and Register.
 */

document.addEventListener('DOMContentLoaded', () => {
    const continueBtn = document.getElementById('btnContinue');
    if (continueBtn) {
        fetch('/load')
            .then((resp) => {
                continueBtn.style.display = resp.ok ? 'inline-block' : 'none';
            })
            .catch(() => {
                continueBtn.style.display = 'none';
            });

        continueBtn.addEventListener('click', () => {
            window.location.href = '/game?continue=1';
        });
    }

    // start a new game; delete existing save then navigate to game page.
    const startBtn = document.getElementById('btnStartNew');
    if (startBtn) {
        startBtn.addEventListener('click', async () => {
            await fetch('/delete-save', { method: 'POST' }).catch(() => {});
            window.location.href = '/game';
        });
    }

    const tutorialBtn = document.getElementById('btnTutorial');
    if (tutorialBtn) {
        tutorialBtn.addEventListener('click', () => {
            window.location.href = '/tutorial';
        });
    }

    const loginBtn = document.getElementById('btnLogin');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = '/login';
        });
    }

    const registerBtn = document.getElementById('btnRegister');
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            window.location.href = '/register';
        });
    }
});
