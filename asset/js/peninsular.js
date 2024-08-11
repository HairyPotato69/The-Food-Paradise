document.getElementById('searchInput').addEventListener('input', function() {
  filterItems(currentCategory);
});

document.getElementById('Reset').addEventListener('click', function() {
  let def = 'all'; // Reset the currentCategory to 'all'
  document.getElementById("searchInput").value = ""; // Reset the currentSearchQuery to an empty string
  filterItems(def); // Call filterItems with the updated currentCategory and currentSearchQuery
  updateActiveButton(document.querySelectorAll('.btn-group .btn')[0]); // Ensure the first button is active
});

document.querySelectorAll('.btn-group .btn')[0].classList.add('active');
let currentCategory = 'all';

function filterItems(category) {
  searchQuery = document.getElementById('searchInput').value.toLowerCase();
  currentCategory = category; // Update the currentCategory
  const items = document.getElementsByClassName('filter-item');

  let found = false;
  let delay = 0;

  for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemText = item.textContent.toLowerCase();
      const itemCategories = item.getAttribute('data-category').split(' ');

      const matchesCategory = category === 'all' || itemCategories.includes(category);
      const matchesSearch = itemText.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
          //item.style.display = 'block';
          item.style.display = 'block';
          item.classList.add('slide-in-right');
          found = true;
      } else {
          item.style.display = 'none';
      }
  }

  if (!found) {
      if (category !== 'all') {
          document.getElementById('notFound').innerHTML = `~ ${category}: \"${searchQuery}\" Not Found ~`;
      } else {
          document.getElementById('notFound').innerHTML = `~ \"${searchQuery}\"Not Found ~`;
      }
  } else {
      document.getElementById('notFound').innerHTML = '';
  }
}

function updateActiveButton(button) {
  document.querySelectorAll('.btn-group .btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

document.querySelectorAll('.btn-group .btn').forEach(button => {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-category'); // Ensure data-category is retrieved correctly
    if (category) {
      updateActiveButton(this);
      filterItems(category, currentSearchQuery); // Use currentSearchQuery
    }
  });
});
