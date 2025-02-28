// Dark Mode Toggle
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Close Alert Function
function closeAlert(alertId) {
    document.getElementById(alertId).style.display = 'none';
}