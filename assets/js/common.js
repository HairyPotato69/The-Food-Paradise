// Select the navbar element
const navbar = document.querySelector('.navbar');

// Function to add or remove shadow effect on navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('shadow-sm');
        navbar.classList.replace('bg-transparent', 'bg-white');
    } else {
        navbar.classList.remove('shadow-sm');
        navbar.classList.replace('bg-white', 'bg-transparent');

    }
});