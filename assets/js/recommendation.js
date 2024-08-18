// AOS init
AOS.init({
    duration: 700
});

// // Select the "favorite"  buttons
// const favoriteButtons = document.querySelectorAll('.btn-fav');

// // Function to show clicked effect
// favoriteButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Add the 'clicked' class to trigger the animation on the clicked button
//         button.classList.add('clicked');

//         // Remove the 'clicked' class after the animation is done
//         setTimeout(() => {
//             button.classList.remove('clicked');
//         }, 300); // Match the duration of the animation
//     });
// });

// Function to show confetti
window.addEventListener('load', () => {
    // Confetti from left
    confetti({
        particleCount: 200,
        angle: 60,
        spread: 100,
        origin: { x: 0, y: 0.9 }
    });

    // Confetti from right
    confetti({
        particleCount: 100,
        angle: 120,
        spread: 100,
        origin: { x: 1, y: 0.9 }
    });
});