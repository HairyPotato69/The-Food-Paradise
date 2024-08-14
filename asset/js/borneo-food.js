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
        title: "Nasi Linou",
        image: "asset\\images\\nasi-linou.jpg",
        description: "Nasi Linou is a traditional Kadazan-Dusun dish made with glutinous rice, cooked with coconut milk and flavored with pandan leaves. It's usually served with side dishes like chicken, beef, or vegetables.",
		allergenlist: ['Coconut'],
		nutrients: [            
			{ name: "Calories", value: 150 },
            { name: "Fat", value: 1.5 },
            { name: "Carbohydrates", value: 35 },
            { name: "Protein", value: 2 },
		]
    },
	3: {
		title: "Nasi Tumpang",
        image: "asset\\images\\nasi-tumpang.jpg",
        description: "A specialty of the Bajau people, Nasi Tumpang consists of rice layered with various fillings like spicy sambal, meat, and vegetables, all wrapped in banana leaves and steamed.",
		allergenlist: ['Depends on filling ingredients'],
		nutrients: [            
			{ name: "Calories", value: 180 },
            { name: "Fat", value: 2 },
            { name: "Carbohydrates", value: 38 },
            { name: "Protein", value: 4 },

		]	
	},
	4: {
		title: "Nasi Ulam",
        image: "asset\\images\\nasi-ulam.jpg",
        description: "Nasi Ulam is a rice dish mixed with a variety of fresh herbs and vegetables, often seasoned with sambal. It’s a healthy and aromatic dish.",
		allergenlist: ['Peanuts', 'Seafood'],
		nutrients: [            
			{ name: "Calories", value: 170 },
            { name: "Fat", value: 3 },
            { name: "Carbohydrates", value: 30 },
            { name: "Protein", value: 5 },

		]	
	},
	5: {
		title: "Nuba Laya",
        image: "asset\\images\\lun-bawang.jpg",
		description: "Nuba Laya is a Lun Bawang dish from Sarawak, made with mashed rice wrapped in banana leaves. It is typically served with a variety of side dishes, such as meats and vegetables, offering a hearty and satisfying meal.",
        allergenlist: ["None"],
        nutrients: [
            { name: "Calories", value: 200 },
            { name: "Fat", value: 1 },
            { name: "Carbohydrates", value: 45 },
            { name: "Protein", value: 4 },
        ]
	},
	6: {
		title: "Lemang",
        image: "asset\\images\\lemang.jpg",
		description: "Sarawak Lemang is a traditional glutinous rice dish cooked in bamboo with coconut milk, commonly enjoyed during festive occasions. The bamboo imparts a unique aroma and flavor to the rice, which is often served with meat or curries.",
        allergenlist: ["Coconut"],
        nutrients: [
            { name: "Calories", value: 330 },
            { name: "Fat", value: 8 },
            { name: "Carbohydrates", value: 65 },
            { name: "Protein", value: 5 },
        ]
	},
	7: {
		title: "Sarawak Laksa",
        image: "asset\\images\\sarawak-laksa.jpg",
		description: "A rich, spicy noodle soup with a coconut milk base, flavored with sambal belacan, garlic, lemon grass, and tamarind.",
        allergenlist: ["Shellfish", "Coconut"],
		nutrients: [
			{ "name": "Calories", "value": 450 },
			{ "name": "Fat", "value": 20 },
			{ "name": "Carbohydrates", "value": 50 },
			{ "name": "Protein", "value": 25 }
		]
	},
	8: {
		title: "Sarawak Laksa",
        image: "asset\\images\\mee-goreng-basah.jpg",
		description: "Mee Goreng Basah is a Malaysian wet fried noodle dish. The noodles are stir-fried with a flavorful blend of spices, soy sauce, vegetables, and a choice of meat or seafood, creating a savory, slightly saucy dish.",
        allergenlist: ["Wheat", "Soy", "Seafood"],
        nutrients: [
            { name: "Calories", value: 480 },
            { name: "Fat", value: 15 },
            { name: "Carbohydrates", value: 70 },
            { name: "Protein", value: 20 },
        ]
	},
	9: {
		title: "Tuaran Mee",
        image: "asset\\images\\tuaran-mee.jpg",
		description: "Tuaran Mee is a famous noodle dish from Tuaran, Sabah, featuring homemade egg noodles stir-fried with vegetables, pork, and egg. The noodles are known for their springy texture and are often served with a savory sauce.",
        allergenlist: ["Wheat", "Eggs", "Pork"],
        nutrients: [
            { name: "Calories", value: 500 },
            { name: "Fat", value: 18 },
            { name: "Carbohydrates", value: 68 },
            { name: "Protein", value: 22 },
        ]
	},
	10: {
		title: "Kuih Cincin",
        image: "asset\\images\\kuih-cincin.jpg",
		description: "Kuih Cincin is a traditional Sabahan snack made from rice flour, palm sugar, and pandan leaves. The dough is shaped into rings and deep-fried until crispy, creating a sweet and crunchy treat.",
        allergenlist: ["None"],
        nutrients: [
            { name: "Calories", value: 150 },
            { name: "Fat", value: 5 },
            { name: "Carbohydrates", value: 25 },
            { name: "Protein", value: 2 },
        ]
	},
	11: {
		title: "Kuih Penyaram",
        image: "asset\\images\\penyaram.jpg",
		description: "Penyaram, also known as Kuih UFO, is a traditional Sarawakian snack made from rice flour, coconut milk, and palm sugar. It has a distinctive UFO shape and is deep-fried to achieve a crispy texture.",
        allergenlist: ["Coconut"],
        nutrients: [
            { name: "Calories", value: 180 },
            { name: "Fat", value: 7 },
            { name: "Carbohydrates", value: 30 },
            { name: "Protein", value: 3 },
        ]
	},
	12: {
		title: "Kuih Penyaram",
        image: "asset\\images\\kek-lapis.jpg",
		description: "Kek Lapis Sarawak, or Sarawak Layer Cake, is a colorful and intricate layered cake made from butter, condensed milk, and eggs. It is a festive snack often enjoyed during celebrations.",
        allergenlist: ["Eggs", "Dairy"],
        nutrients: [
            { name: "Calories", value: 220 },
            { name: "Fat", value: 12 },
            { name: "Carbohydrates", value: 25 },
            { name: "Protein", value: 3 },
        ]
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