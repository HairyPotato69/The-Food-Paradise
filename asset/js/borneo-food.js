const foodData = {
    1: {
        title: "Nasi Lemak",
        image: "https://www.andy-cooks.com/cdn/shop/articles/20231116072724-c2-a9andy_cooks_thumbnails_nasi_lemak_01.jpg?v=1700389619&width=1600",
        description: "Nasi Lemak is Malaysia's national dish, featuring fragrant rice cooked in coconut milk, served with sambal, anchovies, peanuts, boiled egg, and cucumber. This flavorful meal is enjoyed at any time of day and is traditionally wrapped in a banana leaf. Its rich, creamy rice paired with spicy sambal and crunchy sides creates a delightful blend of textures and flavors. Variations may include fried chicken, rendang, or sambal squid.",
        allergenlist: ["Peanuts", "Anchovies", "Eggs"],
		nutrients: [
            { name: "Calories", value: 1040 },
            { name: "Fat", value: 69 },
            { name: "Saturated Fat", value: 22 },
            { name: "Carbohydrates", value: 122 },
            { name: "Sugar", value: 10 },
            { name: "Dietary Fiber", value: 5 },
            { name: "Protein", value: 35 },
            { name: "Cholesterol", value: 95 },
            { name: "Sodium", value: 820 }
        ]
    },
    2: {
        title: "Chicken Tacos",
        image: "tacos.jpg",
        description: "Spicy chicken tacos with fresh salsa...",
    }
}


document.querySelectorAll('.food-item').forEach(item =>{
	item.addEventListener('click', function() {
		const foodId = this.getAttribute('data-id');
		const data = foodData[foodId];
		createPopup(data);
	});
});

function createPopup(data) {
	

	const overlay = document.createElement('div')
	overlay.id = 'overlay';
	overlay.className = 'overlay';

	document.body.style.overflow = 'hidden';

	const popup = document.createElement('div');
	popup.id = 'popup';
	popup.className = 'popup visible';
	popup.innerHTML = `
		<div class="food-card d-flex flex-column overflow-y-scroll overflow-x-hidden bg-white">
			<div class = "food-image position-relative">
				<h1 class = "z-1 m-0 ps-5 p-0">${data.title}</h2>
				<img src="${data.image}" alt="${data.title}">
			</div>
			<div class = "food-info d-flex flex-column">
				<div class = "food-description">
					<h2>Description</h2>
					<p>${data.description}</p>
				</div>
				<div class = "food-allergies">
					<h2>Allergens</h2>
					<ul class = "allergens-list d-flex ps-0 mb-2">
					</ul>
				</div>
				<div class = "food-nutrition">
					<div class = "table-responsive">
						<table class = "table table-borderless table-striped">
							<thead>
								<tr>
									<th scope = "col">Nutrients</th>
									<th scope = "col">per serving</th>
								</tr>
							</thead>
							<tbody class = "nutrients-list">
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<button class="close-btn">Close</button>
	`;
	const allergensList = popup.querySelector('.allergens-list');
	data.allergenlist.forEach(allergen =>{
		const listItem = document.createElement('li');
		listItem.textContent = allergen;
		allergensList.appendChild(listItem);
	});

	const nutrientsList = popup.querySelector('.nutrients-list');
	data.nutrients.forEach(nutrient => {
		const row = document.createElement('tr');
		const th = document.createElement('th');
		th.scope = "row";
		th.textContent = nutrient.name;

		const td = document.createElement('td');
		td.textContent = nutrient.value;

		row.append(th);
		row.appendChild(td);
		nutrientsList.appendChild(row);
	});

	document.body.appendChild(overlay);
	document.body.appendChild(popup);

	overlay.addEventListener('click', () => closePopup(popup, overlay));

}

function closePopup(popup, overlay) {
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
    document.body.style.overflow = ''; // Restore scrolling
}