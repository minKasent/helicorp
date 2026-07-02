(function () {
    'use strict';

    var buttons = document.querySelectorAll('.theme-toggle');

    function isDark() {
        return document.documentElement.dataset.theme === 'dark';
    }

    function syncButtons() {
        var dark = isDark();
        buttons.forEach(function (button) {
            button.setAttribute('aria-pressed', dark ? 'true' : 'false');
            button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
            button.innerHTML = dark
                ? '<i class="fa-regular fa-sun"></i>' + (button.classList.contains('offcanvas-theme-toggle') ? '<span>Light mode</span>' : '')
                : '<i class="fa-regular fa-moon"></i>' + (button.classList.contains('offcanvas-theme-toggle') ? '<span>Dark mode</span>' : '');
        });
    }

    function setTheme(dark) {
        if (dark) document.documentElement.dataset.theme = 'dark';
        else delete document.documentElement.dataset.theme;

        try {
            localStorage.setItem('helicorp-theme', dark ? 'dark' : 'light');
        } catch (error) {}

        syncButtons();
    }

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            setTheme(!isDark());
        });
    });

    syncButtons();
}());
