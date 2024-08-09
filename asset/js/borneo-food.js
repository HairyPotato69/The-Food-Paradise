const foodData = {
    1: {
        title: "Ngiu Chap",
        image: "asset\\images\\ngiu-chap.jpg",
        description: "Delicious burger with griddled onions...",
        time: 30,
        calories: 1040,
        ingredients: [
            "1 unit Crispy Fried Onions",
            "1 unit White Cheddar Cheese",
            "1 tablespoon Cooking Oil"
        ],
        instructions: "Preheat the oven to 220°C. Cook the onions..."
    },
    2: {
        title: "Chicken Tacos",
        image: "tacos.jpg",
        description: "Spicy chicken tacos with fresh salsa...",
        time: 25,
        calories: 850,
        ingredients: [
            "1 unit Chicken Breast",
            "2 units Tortillas",
            "1 unit Salsa"
        ],
        instructions: "Grill the chicken, warm the tortillas..."
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
	const popup = document.createElement('div');
	popup.id = 'popup';
	popup.className = 'popup visible';
	popup.innerHTML = `
		<div class="popup-content">
			<div>
				<img src="${data.image}" alt="${data.title}">
				<h2>${data.title}</h2>
			</div>
			<p>${data.description}</p>
			<p>Cooking Time: ${data.time} minutes</p>
			<p>Calories: ${data.calories}</p>
			<h3>Ingredients</h3>
			<ul>
				${data.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
			</ul>
			<h3>Instructions</h3>
			<p>${data.instructions}</p>
		</div>
		<button class="close-btn">Close</button>
	`;

	document.body.appendChild(popup);

	// Add event listener to close the popup
	popup.querySelector('.close-btn').addEventListener('click', function() {
		document.body.removeChild(popup);
	});
}

/*

current position
var pos = 0;
number of slides
var totalSlides = $('#slider-wrap ul li').length;
get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
    //next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});

	//automatic slider
	var autoSlider = setInterval(slideRight, 3000);
	
	//for each slide 
	$.each($('#slider-wrap ul li'), function() { 
	   //set its color
	   var c = $(this).attr("data-color");
	   $(this).css("background",c);
	   
	   //create a pagination
	   var li = document.createElement('li');
	   $('#pagination-wrap ul').append(li);	   
	});
	
	//counter
	countSlides();
	
	//pagination
	pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);

});//DOCUMENT READY


function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	
	//*> optional
	countSlides();
	pagination();
}


function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	
	//*> optional 
	countSlides();
	pagination();
}

function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}
		
*/