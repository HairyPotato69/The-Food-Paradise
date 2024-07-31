const about_us_section = document.getElementById('about-us');
const style = window.getComputedStyle(about_us_section)

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

let timeline_m = anime.timeline({
  easing: 'easeInOutQuad',
  autoplay: false,
  complete: function(){
    animation_playing = false;
  }
})

timeline_m.add({
  targets: '.background-fill',
  background: accent_quarternary,
    width: [
      function(el) {
        return 0;
      },
      function (el){
        return style.height;
      }],

    height: [
      function(el){
        return 0;
      },
      function(el){
        return style.height;
      }],

    borderRadius:['50%', '50%'],
    duration: 900

})

timeline_m.add({
  targets: ['.about-malaysia p', '#malay', '#chinese', '#indian'],
  color: accent_secondary,
})

timeline_m.add({
  targets: '.background-fill',
  background: accent_quarternary,
    width: [        
      function(el) {
        return style.height;
      },
      function (el){
        return style.width;
      }],
    height: [        
      function(el) {
      return style.height;
    },
    function (el){
      return style.width;
    }],
    borderRadius:['50%', '0%'],
  },850)
timeline_m.add({
    targets: '#about-us > .container',
    borderColor: ['#000000','#FFD700']
  })

let timeline_c = anime.timeline({
  easing: 'easeInOutQuad',
  autoplay: false,
  complete: function(){
    animation_playing = false;
  }
})

timeline_c.add({
  targets: '.background-fill',
  background: accent_primary,
    width: [
      function(el) {
        return 0;
      },
      function (el){
        return style.height;
      }],

    height: [
      function(el){
        return 0;
      },
      function(el){
        return style.height;
      }],

    borderRadius:['50%', '50%'],
    duration: 900

})

timeline_c.add({
  targets: ['.about-malaysia p', '#malay', '#chinese', '#indian'],
  color: primary,
})

timeline_c.add({
  targets: '.background-fill',
  background: accent_primary,
    width: [        
      function(el) {
        return style.height;
      },
      function (el){
        return style.width;
      }],
    height: [        
      function(el) {
      return style.height;
    },
    function (el){
      return style.width;
    }],
    borderRadius:['50%', '0%'],
  },850)
timeline_c.add({
    targets: '#about-us > .container',
    borderColor: primary
  })

document.getElementById('malay').addEventListener('mouseover', function() {
  if (!animation_playing){
    animation_playing = true;
    timeline_m
  .play();
  }
});

document.getElementById('chinese').addEventListener('mouseover', function() {
  if (!animation_playing){
    animation_playing = true;
    timeline_c
  .play();
  }
});
