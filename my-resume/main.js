// main.js
const btn = document.getElementById('theme-toggle');
function setThemeIcon() {
    if (document.body.classList.contains('dark-mode')) {
        btn.innerHTML = '<span class="icon">🌙</span> <span>Dark Mode</span>';
    } else {
        btn.innerHTML = '<span class="icon">☀️</span> <span>Light Mode</span>';
    }
}
btn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    setThemeIcon();
});
setThemeIcon();