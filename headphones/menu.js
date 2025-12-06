// Hamburger menu functionality for mobile screens

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon span');

    function toggleMenu() {
        navLinks.classList.toggle('open');
        menuIcon.classList.toggle('open');
    }

    menuBtn.addEventListener('change', toggleMenu);

    // Optional: close menu when a link is clicked (for single-page nav)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 480) {
                menuBtn.checked = false;
                toggleMenu();
            }
        });
    });
});
