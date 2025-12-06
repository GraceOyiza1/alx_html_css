/**
 * Toggles the mobile menu open and closed by adding/removing the 'menu-active'
 * class to the navigation links when the hamburger icon is clicked.
 * * The 'menu-active' class is what the CSS (8-styles.css) uses to animate 
 * the menu into view (opacity: 1 and transform: translateY(0)).
 */
document.addEventListener('DOMContentLoaded', () => {
    // Select the hamburger icon (the clickable element)
    const menuButton = document.querySelector('.menu-icon');

    // Select the navigation list (the element that needs to be shown/hidden)
    const navLinks = document.querySelector('.nav-links');

    // Ensure both elements exist before trying to attach event listeners
    if (menuButton && navLinks) {
        // 1. Listen for a click on the hamburger icon
        menuButton.addEventListener('click', () => {
            // Toggles the class 'menu-active'. If the class is present, it removes it. 
            // If it's absent, it adds it. This is the core of the toggle function.
            navLinks.classList.toggle('menu-active');
        });

        // 2. UX Improvement: Automatically close the menu after a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                // Remove the class to smoothly hide the menu after navigation
                navLinks.classList.remove('menu-active');
            });
        });
    }
});