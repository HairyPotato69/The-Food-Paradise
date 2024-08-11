const filterList = [];
document.querySelectorAll('.filter-cat').forEach((filter) => {
    filterList.push(filter.textContent);
});

document.querySelectorAll('.filter-cat').forEach((filter) => {
    filter.addEventListener('onclick', filterItems(filter.textContent))
});

function filterItems(category){
    let found = false;
    const items = document.getElementsByClassName('food-item');
    for (let i = 0; i< items.length; i++){
        const item = items[i];
        console.log(item.getAttribute('data-category').split(' '));
    }
}

filterItems();