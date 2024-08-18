const foodData = {
	1: {
		title: "Nasi Lemak",
		image: "assets\\images\\nasi-lemak.jpg",
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
		image: "assets\\images\\nasi-linou.jpg",
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
		image: "assets\\images\\nasi-tumpang.jpg",
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
		image: "assets\\images\\nasi-ulam.jpg",
		description: "Nasi Ulam is a rice dish mixed with a variety of fresh herbs and vegetables, often seasoned with sambal. It's a healthy and aromatic dish.",
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
		image: "assets\\images\\lun-bawang.jpg",
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
		image: "assets\\images\\lemang.jpg",
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
		image: "assets\\images\\sarawak-laksa.jpg",
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
		image: "assets\\images\\mee-goreng-basah.jpg",
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
		image: "assets\\images\\tuaran-mee.jpg",
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
		image: "assets\\images\\kuih-cincin.jpg",
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
		image: "assets\\images\\penyaram.jpg",
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
		image: "assets\\images\\kek-lapis.jpg",
		description: "Kek Lapis Sarawak, or Sarawak Layer Cake, is a colorful and intricate layered cake made from butter, condensed milk, and eggs. It is a festive snack often enjoyed during celebrations.",
		allergenlist: ["Eggs", "Dairy"],
		nutrients: [
			{ name: "Calories", value: 220 },
			{ name: "Fat", value: 12 },
			{ name: "Carbohydrates", value: 25 },
			{ name: "Protein", value: 3 },
		]
	},
	14: {
		title: "Laksa Utara",
		image: "assets\\images\\laksa-utara.jpg",
		description: "Laksa Utara, also known as Northern Laksa, is a beloved Malaysian dish originating from the northern states of Malaysia. This flavorful noodle soup features a rich, spicy broth made from a blend of fish, tamarind, and aromatic herbs and spices. The dish is typically served with thick rice noodles, garnished with fresh herbs like mint and Vietnamese coriander, and topped with ingredients such as cucumber, pineapple, and boiled egg. The combination of tangy, spicy, and savory flavors makes Laksa Utara a unique and satisfying culinary experience.",
		allergenlist: ["Fish", "Tamarind", "Herbs and Spices"],
		nutrients: [
			{ name: "Calories", value: 350 },
			{ name: "Fat", value: 10 },
			{ name: "Saturated Fat", value: 3 },
			{ name: "Carbohydrates", value: 50 },
			{ name: "Sugar", value: 8 },
			{ name: "Dietary Fiber", value: 4 },
			{ name: "Protein", value: 15 },
			{ name: "Cholesterol", value: 60 },
			{ name: "Sodium", value: 900 }
		]
	},
	15: {
		title: "Asam Laksa",
		image: "assets\\images\\asam-laksa.jpg",
		description: "Asam Laksa is a tangy and spicy Malaysian noodle soup made with mackerel fish, tamarind, and a variety of aromatic herbs and spices. This dish is known for its distinctive sour flavor, which comes from the tamarind and asam gelugur (dried tamarind slices). It is typically served with thick rice noodles and garnished with ingredients such as cucumber, pineapple, mint, and red chili. Asam Laksa is a refreshing and flavorful dish that is popular in the northern states of Malaysia.",
		allergenlist: ["Fish", "Tamarind", "Herbs and Spices"],
		nutrients: [
			{ name: "Calories", value: 300 },
			{ name: "Fat", value: 8 },
			{ name: "Saturated Fat", value: 2 },
			{ name: "Carbohydrates", value: 45 },
			{ name: "Sugar", value: 6 },
			{ name: "Dietary Fiber", value: 3 },
			{ name: "Protein", value: 12 },
			{ name: "Cholesterol", value: 40 },
			{ name: "Sodium", value: 700 }
		]
	},
	16: {
		title: "Lamb Rendang",
		image: "assets\\images\\lamb-rendang.jpg",
		description: "Lamb Rendang is a rich and aromatic dish made with lamb slow-cooked in coconut milk and a blend of spices. This traditional Malaysian dish is known for its deep flavors and tender meat, often served with rice.",
		allergenlist: ["Coconut", "Spices"],
		nutrients: [
			{ name: "Calories", value: 299 },
			{ name: "Fat", value: 59 },
			{ name: "Saturated Fat", value: 47 },
			{ name: "Carbohydrates", value: 22 },
			{ name: "Sugar", value: 8 },
			{ name: "Dietary Fiber", value: 3 },
			{ name: "Protein", value: 26 },
			{ name: "Cholesterol", value: 68 },
			{ name: "Sodium", value: 675 },
			{ name: "Potassium", value: 300 },
			{ name: "Vitamin A", value: 500 },
			{ name: "Vitamin C", value: 10 },
			{ name: "Calcium", value: 100 },
			{ name: "Iron", value: 4 }
		]
	},
	17: {
		title: "Curry Mee",
		image: "assets\\images\\curry-mee.jpg",
		description: "Curry Mee is a popular Malaysian noodle soup made with yellow egg noodles and a rich, spicy curry broth. This dish is typically garnished with a variety of toppings such as chicken, shrimp, tofu, and bean sprouts. The creamy coconut milk base combined with the aromatic spices creates a flavorful and satisfying meal.",
		allergenlist: ["Coconut", "Shrimp", "Chicken", "Spices"],
		nutrients: [
			{ name: "Calories", value: 642 },
			{ name: "Fat", value: 44 },
			{ name: "Saturated Fat", value: 27 },
			{ name: "Carbohydrates", value: 39 },
			{ name: "Sugar", value: 5 },
			{ name: "Dietary Fiber", value: 4 },
			{ name: "Protein", value: 29 },
			{ name: "Cholesterol", value: 94 },
			{ name: "Sodium", value: 903 },
			{ name: "Potassium", value: 987 },
			{ name: "Vitamin A", value: 865 },
			{ name: "Vitamin C", value: 9 },
			{ name: "Calcium", value: 109 },
			{ name: "Iron", value: 8.3 }
		]
	},
	18: {
		title: "Keropok Lekor",
		image: "assets\\images\\keropok-lekor.jpg",
		description: "Keropok Lekor is a traditional Malaysian snack made from fish and sago flour, shaped into long sausages and deep-fried until crispy. This popular street food is often enjoyed with a sweet and spicy chili sauce. The combination of the crunchy exterior and the chewy interior makes Keropok Lekor a delightful treat.",
		allergenlist: ["Fish", "Sago"],
		nutrients: [
			{ name: "Calories", value: 250 },
			{ name: "Fat", value: 12 },
			{ name: "Saturated Fat", value: 3 },
			{ name: "Carbohydrates", value: 28 },
			{ name: "Sugar", value: 2 },
			{ name: "Dietary Fiber", value: 1 },
			{ name: "Protein", value: 10 },
			{ name: "Cholesterol", value: 30 },
			{ name: "Sodium", value: 450 },
			{ name: "Potassium", value: 150 },
			{ name: "Vitamin A", value: 50 },
			{ name: "Vitamin C", value: 2 },
			{ name: "Calcium", value: 20 },
			{ name: "Iron", value: 1 }
		]
	},
	19: {
		title: "Murtabak",
		image: "assets\\images\\murtabak.jpg",
		description: "Murtabak is a savory stuffed pancake or flatbread commonly found in Malaysia. It is filled with a mixture of minced meat, onions, and spices, then pan-fried until crispy. This dish is often enjoyed with a side of curry sauce or pickled vegetables.",
		allergenlist: ["Wheat", "Eggs", "Meat"],
		nutrients: [
			{ name: "Calories", value: 396 },
			{ name: "Fat", value: 17 },
			{ name: "Saturated Fat", value: 8.3 },
			{ name: "Carbohydrates", value: 40 },
			{ name: "Sugar", value: 1.5 },
			{ name: "Dietary Fiber", value: 1.5 },
			{ name: "Protein", value: 18 },
			{ name: "Cholesterol", value: 163 },
			{ name: "Sodium", value: 373 },
			{ name: "Potassium", value: 250.6 },
			{ name: "Iron", value: 4.1 }
		]
	},
	20: {
		title: "Popiah",
		image: "assets\\images\\popiah.jpg",
		description: "Popiah is a fresh spring roll commonly enjoyed in Malaysia. It consists of a thin crepe-like wrapper filled with a mixture of cooked vegetables, tofu, and sometimes shrimp or meat. Popiah is often served with a sweet and savory sauce.",
		allergenlist: ["Wheat", "Soy", "Shrimp (optional)"],
		nutrients: [
			{ name: "Calories", value: 188 },
			{ name: "Fat", value: 4 },
			{ name: "Saturated Fat", value: 1 },
			{ name: "Carbohydrates", value: 28 },
			{ name: "Sugar", value: 2 },
			{ name: "Dietary Fiber", value: 3 },
			{ name: "Protein", value: 8 },
			{ name: "Cholesterol", value: 10 },
			{ name: "Sodium", value: 350 },
			{ name: "Potassium", value: 150 },
			{ name: "Vitamin A", value: 50 },
			{ name: "Vitamin C", value: 2 },
			{ name: "Calcium", value: 20 },
			{ name: "Iron", value: 1 }
		]
	},
	21: {
		title: "Biryani",
		image: "assets\\images\\biryani.jpg",
		description: "Biryani is a flavorful and aromatic rice dish that is popular in Malaysia. It is made with basmati rice, spices, and meat such as chicken, beef, or lamb. The dish is often garnished with fried onions, boiled eggs, and fresh herbs.",
		allergenlist: ["Dairy (if yogurt is used)", "Meat"],
		nutrients: [
			{ name: "Calories", value: 515 },
			{ name: "Fat", value: 22 },
			{ name: "Saturated Fat", value: 7 },
			{ name: "Carbohydrates", value: 51 },
			{ name: "Sugar", value: 3 },
			{ name: "Dietary Fiber", value: 2 },
			{ name: "Protein", value: 27 },
			{ name: "Cholesterol", value: 48 },
			{ name: "Sodium", value: 419 },
			{ name: "Potassium", value: 461.7 },
			{ name: "Vitamin A", value: 50 },
			{ name: "Vitamin C", value: 2 },
			{ name: "Calcium", value: 26 },
			{ name: "Iron", value: 1.7 }
		]
	},
	22: {
		title: "Char Kway Teow",
		image: "assets\\images\\char-kway-teow.jpg",
		description: "Char Kway Teow is a beloved street food dish made with flat rice noodles stir-fried with shrimp, eggs, Chinese sausage, bean sprouts, and chives. It's typically cooked in a wok over high heat, giving it a distinctive smoky flavor.",
		allergenlist: ["Shrimp", "Eggs", "Soy"],
		nutrients: [
			{ name: "Calories", value: 744 },
			{ name: "Fat", value: 36 },
			{ name: "Saturated Fat", value: 8 },
			{ name: "Carbohydrates", value: 80 },
			{ name: "Sugar", value: 6 },
			{ name: "Dietary Fiber", value: 4 },
			{ name: "Protein", value: 28 },
			{ name: "Cholesterol", value: 285 },
			{ name: "Sodium", value: 1200 },
			{ name: "Potassium", value: 450 },
			{ name: "Vitamin A", value: 500 },
			{ name: "Vitamin C", value: 10 },
			{ name: "Calcium", value: 100 },
			{ name: "Iron", value: 4 }
		]
	},
	23: {
		title: "Roti Canai",
		image: "assets\\images\\roti-canai.jpg",
		description: "Roti Canai is a flaky, crispy flatbread that is often served with dhal (lentil curry) or other types of curry. It's a popular breakfast item and can be enjoyed plain or with various fillings like egg, cheese, or banana.",
		allergenlist: ["Wheat", "Dairy (if butter or ghee is used)"],
		nutrients: [
			{ name: "Calories", value: 300 },
			{ name: "Fat", value: 15 },
			{ name: "Saturated Fat", value: 8 },
			{ name: "Carbohydrates", value: 35 },
			{ name: "Sugar", value: 2 },
			{ name: "Dietary Fiber", value: 2 },
			{ name: "Protein", value: 6 },
			{ name: "Cholesterol", value: 30 },
			{ name: "Sodium", value: 400 },
			{ name: "Potassium", value: 150 },
			{ name: "Vitamin A", value: 100 },
			{ name: "Vitamin C", value: 1 },
			{ name: "Calcium", value: 20 },
			{ name: "Iron", value: 1.5 }
		]
	},
	24: {
		title: "Ipoh Chicken Rice",
		image: "assets\\images\\ipoh-chicken-rice.jpg",
		description: "Ipoh Chicken Rice is a popular Malaysian dish from Ipoh, featuring poached chicken served with fragrant rice cooked in chicken broth. It's accompanied by a variety of sauces, including chili sauce, ginger paste, and soy sauce.",
		allergenlist: ["Soy", "Chicken"],
		nutrients: [
			{ name: "Calories", value: 600 },
			{ name: "Fat", value: 20 },
			{ name: "Saturated Fat", value: 5 },
			{ name: "Carbohydrates", value: 70 },
			{ name: "Sugar", value: 3 },
			{ name: "Dietary Fiber", value: 2 },
			{ name: "Protein", value: 30 },
			{ name: "Cholesterol", value: 100 },
			{ name: "Sodium", value: 800 },
			{ name: "Potassium", value: 300 },
			{ name: "Vitamin A", value: 200 },
			{ name: "Vitamin C", value: 5 },
			{ name: "Calcium", value: 40 },
			{ name: "Iron", value: 2 }
		]
	}
};


document.querySelectorAll('.food-item').forEach(item => {
	item.addEventListener('click', function () {
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
	data.allergenlist.forEach(allergen => {
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