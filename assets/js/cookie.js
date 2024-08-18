// Function to get cookies
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// Function to set cookies
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Select the "favorite"  buttons
const favoriteButtons = document.querySelectorAll('.btn-favorite');

// Function to show clicked effect
favoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add the 'clicked' class to trigger the animation on the clicked button
        button.classList.add('clicked');

        // Remove the 'clicked' class after the animation is done
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300); // Match the duration of the animation
    });
});

// Function to toggle favorite status
function toggleFavorite(id, category, imgSrc, title, location) {
    let favorites = getCookie("favorites");
    favorites = favorites ? JSON.parse(decodeURIComponent(favorites)) : [];
    
    let recipe = { id, category, imgSrc, title, location };
    
    let index = favorites.findIndex(fav => fav.id === id);
    if (index !== -1) {
        // Remove from favorites
        favorites.splice(index, 1);
    } else {
        // Add to favorites
        favorites.push(recipe);
    }
    
    setCookie("favorites", encodeURIComponent(JSON.stringify(favorites)), 7);
    updateFavoriteButtons();
}

// Function to update favorite buttons based on current favorites
function updateFavoriteButtons() {
    let favorites = getCookie("favorites");
    favorites = favorites ? JSON.parse(decodeURIComponent(favorites)) : [];
    
    document.querySelectorAll('.btn-favorite').forEach(button => {
        let id = parseInt(button.getAttribute('onclick').match(/\d+/)[0]);
        if (favorites.some(fav => fav.id === id)) {
            button.classList.add('favorited');
        } else {
            button.classList.remove('favorited');
        }
    });
}

// Load favorites on page load and update buttons
document.addEventListener("DOMContentLoaded", updateFavoriteButtons);