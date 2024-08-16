//Filter Food (category)
document.getElementById('filterSelect').addEventListener('change', function() {
  const selectedCategory = this.value;
  const foodItems = document.querySelectorAll('#foodList li');

  foodItems.forEach(function(item) {
      const categories = item.getAttribute('data-category').split(' ');
      if (selectedCategory === 'all' || categories.includes(selectedCategory)) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
  alert("Filtered by " + selectedCategory);
});

//Search Function
document.getElementById('searchInput').addEventListener('input', function() {
  const searchText = this.value.toLowerCase();
  const foodItems = document.querySelectorAll('#foodList li');
  let i = false;
  foodItems.forEach(function(item) {
    
    if (searchText == "") {
      document.getElementById("notFound").innerHTML = "";
    }
      if (item.textContent.toLowerCase().includes(searchText)) {
          item.style.display = 'block';
          i = true;
      } 
      else {
          item.style.display = 'none';
      }

      if (i == false) {
        document.getElementById("notFound").innerHTML = "&nbsp;&nbsp;~ \"" + searchText + "\" Not Found ~";
      }
      else {
        document.getElementById("notFound").innerHTML = "";
      }
  });
});