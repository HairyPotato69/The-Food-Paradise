function loadFavorites() {
    let favorites = getCookie("favorites");
    let favoritesRow = document.getElementById("favorites-row");

    // Clear existing content
    favoritesRow.innerHTML = '';

    if (favorites) {
        // Debugging line
        console.log("Favorites JSON String:", favorites);

        try {
            favorites = JSON.parse(decodeURIComponent(favorites));
        } catch (e) {
            console.error("Error parsing JSON:", e);
            return;
        }

        // Sort by newest first
        favorites.sort((a, b) => b.id - a.id);

        if (favorites.length === 0) {
            displayEmptyMessage(favoritesRow);
            return;
        }

        let row;
        
        favorites.forEach((recipe, index) => {
            if (index % 3 === 0) {
                row = document.createElement('div');
                row.className = 'row';
                favoritesRow.appendChild(row);
            }

            let col = document.createElement('div');
            col.className = 'col-lg-4 p-3';
            col.innerHTML = `
                <div class="card food-item rounded" data-id="${recipe.id}" data-category="${recipe.category}">
                    <div class="position-relative img-holder">
                        <img src="${recipe.imgSrc}" class="card-img-top" alt="${recipe.title}">
                        <button class="btn-favorite" onclick="event.stopPropagation(); toggleFavorite(${recipe.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fs-3">${recipe.title}</h5>
                        <p class="card-text fs-6">${recipe.location}</p>
                    </div>
                </div>
            `;
            row.appendChild(col);
        });

        document.querySelectorAll('.food-item').forEach(item => {
            item.addEventListener('click', function () {
                const foodId = this.getAttribute('data-id');
                const data = foodData[foodId];
                createPopup(data);
            });
        });
    } else {
        displayEmptyMessage(favoritesRow);
    }
}

// Function to display empty message
function displayEmptyMessage(container) {
    let message = document.createElement('h2');
    message.className = 'empty-container mt-4';
    message.textContent = 'Favorites Is Empty';
    container.appendChild(message);
}

// Load favorites on page load
document.addEventListener("DOMContentLoaded", loadFavorites);