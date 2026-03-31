/**
 * tutorial.js - handles navigation from tutorial screen back to menu.
 */
/**
 * tutorial.js - minimal nav for tutorial page.
 *
 * Provides a back button to return to main menu.
 */
document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('btnBack');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = '/';
        });
    }
});
