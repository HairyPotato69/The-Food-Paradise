const filter = document.querySelectorAll('.filter-cat');
const foodContainer = document.getElementById('food-container');
const foodItems = Array.from(document.querySelectorAll('.food-item'));

function createNewRows() {
    const row = document.createElement('div');
    row.className = 'row';
    return row;
}

function appendItems(items) {
    foodContainer.innerHTML = '';
    let currentRow = createNewRows();
    foodContainer.appendChild(currentRow);
    items.forEach((item, index) => {
        if (index % 3 == 0 && index > 0) {
            currentRow = createNewRows();
            foodContainer.appendChild(currentRow);
        }
        let col = document.createElement('div');
        col.className = 'col-lg-4 p-3';
        col.appendChild(item);
        currentRow.appendChild(col);
        item.style.display = "flex";
    });
    anime({
        targets: '.food-item',
        translateX: [500, 0],
        duration: 500,
        easing: 'easeInOutQuad'
    });
}

filter.forEach(filter => {
    filter.addEventListener('click', function (event) {
        event.preventDefault();
        const category = this.getAttribute('data-filter');
        if (category === 'all') {
            appendItems(foodItems);
        } else {
            const filteredItems = foodItems.filter(item => {
                const categories = item.getAttribute('data-category').split(',').map(cat => cat.trim());
                return categories.includes(category);
            });
            appendItems(filteredItems)
        }
    });
});