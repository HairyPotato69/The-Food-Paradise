//For changing root bg color
/*var root_theme = document.querySelector(':root');
root_theme.style.setProperty('--bg-control', '#000000');*/

//Video Change based on display
function updateVideoSource() {
  const video = document.getElementById('hero');
  const source = document.getElementById('video-source');
  const width = window.innerWidth;
  let newSrc;

  if (width <= 950) {
    newSrc = 'assets/videos/hero-mobile.mp4';
  } else {
    newSrc = 'assets/videos/hero.mp4';
  }

  // Only update the source if it has changed
  if (source.src !== window.location.origin + '/' + newSrc) {
    source.src = newSrc;

    // Reload the video with the new source
    video.load();
  }
}

window.addEventListener('resize', updateVideoSource);
window.addEventListener('load', updateVideoSource);

//Form Visibility
function openForm() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("regForm").style.display = "block";
  document.body.style.overflow = 'hidden';
}

async function closeForm() {
  await sleep(200);
  document.getElementById("overlay").style.display = "none";
  document.getElementById("regForm").style.display = "none";
  document.body.style.overflow = 'auto';
}


// Delay Function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function copyPhone() {
  // Get the text field
  var copyText = document.getElementById("copyPhone").innerHTML;

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Copied: " + copyText);
}

/*Submit Validity Button Color*/
document.getElementById('regForm').addEventListener('input', function () {
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const email = document.getElementById('email');
  const contact = document.getElementById('contact');
  const file = document.getElementById('file');
  const plan = document.getElementById('plan');
  const submitBtn = document.getElementById('submit');

  if (fname.checkValidity() && lname.checkValidity() && contact.checkValidity() && plan.checkValidity() && email.checkValidity() && file.checkValidity()) {
    submitBtn.classList.add('valid');
    submitBtn.classList.remove('invalid');
    submitBtn.disabled = false;
  } else {
    submitBtn.classList.add('invalid');
    submitBtn.classList.remove('valid');
    submitBtn.disabled = true;
  }
});

document.getElementById('regForm').addEventListener('submit', function () {
    closeForm();
});

//Partnership Info
document.getElementById("MOTEC").addEventListener("click", function () { company(1); });
document.getElementById("UTAR").addEventListener("click", function () { company(2); });
document.getElementById("AirAsia").addEventListener("click", function () { company(3); });

function company(no) {
  document.getElementById("activate-desc").style.display = "block";
  const companyDesc = document.getElementById("company-detail");
  const companyTitle = document.getElementById("company-title");
  document.getElementById("dynamic-margin-top-4").className = "row justify-content-center text-center mt-4";

  if (no == 1) {
    companyTitle.innerHTML = "Ministry Of Tourism And Culture";
    companyDesc.innerHTML = "The Ministry of Tourism, Arts and Culture Malaysia <b>MOTAC</b> is a government ministry responsible for promoting tourism, arts, and culture in Malaysia. Established to enhance the country's tourism industry, MOTAC plays a crucial role in <b>showcasing Malaysia's rich cultural heritage and diverse attractions.</b>";
  }
  else if (no == 2) {
    companyTitle.innerHTML = "University Tunku Abdul Rahman";
    companyDesc.innerHTML = "Universiti Tunku Abdul Rahman (UTAR) is a distinguished private university in Malaysia, renowned for its commitment to educational excellence and societal impact. Established in 2002, UTAR has rapidly grown to become one of the leading higher education institutions in the country."
  }
  else if (no == 3) {
    companyTitle.innerHTML = "Air Asia";
    companyDesc.innerHTML = "AirAsia actively sponsors and supports various sports teams and cultural events, reflecting its commitment to community and cultural development. Additionally, AirAsia was committed to community engagement and philanthropy. Through the AirAsia Foundation, the airline supports various social enterprises and community projects across ASEAN."
  }
}

window.addEventListener('scroll', function () {
  const h1 = document.querySelector('#black-container h1');
  const scrollPosition = window.scrollY;

  if (scrollPosition < 300) {
    h1.style.color = '#242323';
  } else if (scrollPosition < 400) {
    h1.style.color = '#817f59';
  } else if (scrollPosition < 800) {
    h1.style.color = '#c39d34';
  } else if (scrollPosition < 900) {
    h1.style.color = '#e6c567';
  } else if (scrollPosition < 1050) {
    h1.style.color = '#fff53b';
  } else {
    h1.style.color = '#242323';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    }
  });
});

//Image Modal
function openImageModal(src) {
  document.getElementById('modalImage').src = src;
  var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
  myModal.show();
}

//JQuery
$(document).ready(function () {
  $('#form-in').on('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var formData = $(this).serializeArray(); // Serialize the form data
    var jsonData = {};

    $.each(formData, function () {
      jsonData[this.name] = this.value;
    });

    // Convert the JSON object to a JSON string
    var jsonString = JSON.stringify(jsonData);

    // Create a Blob from the JSON string
    var blob = new Blob([jsonString], { type: "application/json" });

    // Create a link element
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "form-data.json";

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  });
});