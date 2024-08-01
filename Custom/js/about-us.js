const about_us_section = document.getElementById('about-us');
const width = about_us_section.offsetWidth;
const height = about_us_section.offsetHeight;

const menuButton = document.querySelector('#menu-button')
const rootElement = document.documentElement

const primary =  '#151618';
const accent_quarternary= '#2F452D';
const accent_primary = '#C21807';
const accent_secondary = '#FFD700';

menuButton.addEventListener('click', () => {
  rootElement.toggleAttribute('menu-open')
})

const alex_span = document.querySelector('.alex');
const alex_figure = document.querySelector('#Alex');

alex_span.addEventListener('mouseover', () => {
  alex_figure.classList.add('hover-active');
});

alex_span.addEventListener('mouseout', () => {
  alex_figure.classList.remove('hover-active');
});

const jia_span = document.querySelector('.jia-en');
const jia_figure = document.querySelector('#Jia-En');

jia_span.addEventListener('mouseover', () => {
  jia_figure.classList.add('hover-active');
});

jia_span.addEventListener('mouseout', () => {
  jia_figure.classList.remove('hover-active');
});

const thomas_span = document.querySelector('.thomas');
const thomas_figure = document.querySelector('#Thomas');

thomas_span.addEventListener('mouseover', () => {
  thomas_figure.classList.add('hover-active');
});

thomas_span.addEventListener('mouseout', () => {
  thomas_figure.classList.remove('hover-active');
});

const jimmy_span = document.querySelector('.jimmy');
const jimmy_figure = document.querySelector('#Jimmy');

jimmy_span.addEventListener('mouseover', () => {
  jimmy_figure.classList.add('hover-active');
});

jimmy_span.addEventListener('mouseout', () => {
  jimmy_figure.classList.remove('hover-active');
});


let animation_playing = false;
let animation_finished = false;
let hover_count = 1;
let current_timeline = null;
let next_timeline = null;

function animate_m(){
  
  let ketupat_object = document.getElementById("ketupat");
  let lantern_object = document.getElementById("lanterns");
  let ketupat_docu = ketupat_object.contentDocument;
  let lantern_docu = lantern_object.contentDocument;
  
  if (ketupat_docu){
    var ketupat_path = ketupat_docu.querySelector("path");
    var lantern_path = lantern_docu.querySelector("path");
    var ketupat_path_length = ketupat_path.getTotalLength();
    var lantern_path_length = lantern_path.getTotalLength();

    ketupat_path.style.strokeDasharray = ketupat_path_length;
    ketupat_path.style.strokeDashoffset = ketupat_path_length;

    lantern_path.style.strokeDasharray = lantern_path_length;
    lantern_path.style.strokeDashoffset = lantern_path_length;
  }
  
  return anime.timeline({
    easing: 'easeInOutQuad',
    autoplay: false,
    complete: function(){
      animation_playing = false;
      animation_finished = true;
    }
  })
  .add({
    targets: '.background-fill',
    background: accent_quarternary,
      width: [
        function(el) {
          return 0;
        },
        function (el){
          return height;
        }],
  
      height: [
        function(el){
          return 0;
        },
        function(el){
          return height;
        }],
  
      borderRadius:['50%', '50%'],
      duration: 900
  })
  .add({
    targets: ['.about-malaysia p', '#malay', '#chinese', '#indian'],
    color: accent_secondary,
  },0)
  .add({
    targets: '.background-fill',
    background: accent_quarternary,
      width: [        
        function(el) {
          return height;
        },
        function (el){
          return width;
        }],
      height: [        
        function(el) {
        return height;
      },
      function (el){
        return width;
      }],
      borderRadius:['50%', '0%'],
    })
  .add({
    targets: ketupat_path,
    translateX: {
      value: -500,
      duration: 800,
      easing:'easeOutElastic(1, .8)'
    },

    strokeDashoffset: [ketupat_path_length, 0],
    easing:'easeInOutQuad',
    duration: 3000,
    opacity: [0, 100],
    begin: function() {
      ketupat_object.style.opacity = 1;  // Show the SVG when the animation starts
    }
  })
  .add({
    targets: lantern_path,
    
    translateY:{
      value: -800,
      duration: 800,
      easing:'easeOutElastic(1, .8)'
    },

    strokeDashoffset: [lantern_path_length, 0],
    easing:'easeInOutQuad',
    duration: 3000,
    opacity: [0, 100],
    begin: function() {
      lantern_object.style.opacity = 1;  // Show the SVG when the animation starts
    }
    }, 1000)
  .add({      
    targets: '#about-us > .container',
    borderColor: ['#000000','#FFD700'],
    }, 0)
}

document.getElementById('malay').addEventListener('mouseover', function() {
  if(current_timeline === null){
    current_timeline = animate_m();
    next_timeline = null;
  }
  if(animation_playing){
    return;
  }
  if(animation_finished){
    current_timeline.reverse();
  }
  current_timeline.play();
});