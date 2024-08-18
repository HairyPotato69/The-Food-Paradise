// Select the "Go to Top" button
const goTopButton = document.querySelector('.btn-go-to-top');

// Function to show or hide the "Go to Top" button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        goTopButton.classList.add('show');
    } else {
        goTopButton.classList.remove('show');
    }
});

// Select the navbar element
const navbar = document.querySelector('.navbar');

// Function to add or remove shadow effect on navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('shadow-sm');

        // Check if the navbar has a dark background
        if (navbar.classList.contains('navbar-dark')) {
            navbar.classList.replace('bg-transparent', 'bg-black');
        } else {
            navbar.classList.replace('bg-transparent', 'bg-white');
        }
    } else {
        navbar.classList.remove('shadow-sm');

        // Revert to transparent background based on dark or light theme
        if (navbar.classList.contains('navbar-dark')) {
            navbar.classList.replace('bg-black', 'bg-transparent');
        } else {
            navbar.classList.replace('bg-white', 'bg-transparent');
        }
    }
});
