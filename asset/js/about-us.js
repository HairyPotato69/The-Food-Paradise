const about_us_section = document.getElementById('about-us');
const test = about_us_section.getBoundingClientRect();
const width = test.width;
const height = test.height;

const menuButton = document.querySelector('#menu-button')
const rootElement = document.documentElement

const color_black =  '#151618';
const color_green= '#2F452D';
const color_red = '#C21807';
const color_yellow = '#FFD700';
const color_purple = '#702963';
const color_white = '#fafafa';

const alex_span = document.querySelector('.alex');
const alex_figure = document.querySelector('#alex');

alex_span.addEventListener('mouseover', () => {
  alex_figure.classList.add('hover-active');
});

alex_span.addEventListener('mouseout', () => {
  alex_figure.classList.remove('hover-active');
});

const jia_span = document.querySelector('.jia-en');
const jia_figure = document.querySelector('#jia-en');

jia_span.addEventListener('mouseover', () => {
  jia_figure.classList.add('hover-active');
});

jia_span.addEventListener('mouseout', () => {
  jia_figure.classList.remove('hover-active');
});

const thomas_span = document.querySelector('.thomas');
const thomas_figure = document.querySelector('#thomas');

thomas_span.addEventListener('mouseover', () => {
  thomas_figure.classList.add('hover-active');
});

thomas_span.addEventListener('mouseout', () => {
  thomas_figure.classList.remove('hover-active');
});

const jimmy_span = document.querySelector('.jimmy');
const jimmy_figure = document.querySelector('#jimmy');

jimmy_span.addEventListener('mouseover', () => {
  jimmy_figure.classList.add('hover-active');
});

jimmy_span.addEventListener('mouseout', () => {
  jimmy_figure.classList.remove('hover-active');
});


let animation_playing = false;
let animation_finished = false;
let current_timeline = null;

function animate_m(){

  // let ketupat_object = document.getElementById("ketupat");
  // let lantern_object = document.getElementById("lanterns");
  // let ketupat_docu = ketupat_object.contentDocument;
  // let lantern_docu = lantern_object.contentDocument;
  
  // if (ketupat_docu){
  //   var ketupat_path = ketupat_docu.querySelector("path");
  //   var lantern_path = lantern_docu.querySelector("path");
  //   var ketupat_path_length = ketupat_path.getTotalLength();
  //   var lantern_path_length = lantern_path.getTotalLength();

  //   ketupat_path.style.strokeDasharray = ketupat_path_length;
  //   ketupat_path.style.strokeDashoffset = ketupat_path_length;

  //   lantern_path.style.strokeDasharray = lantern_path_length;
  //   lantern_path.style.strokeDashoffset = lantern_path_length;
  // }
  
  const timeline = anime.timeline({
    easing: 'easeInOutQuad',
    autoplay: false,
    complete: function(){
      animation_playing = false;
      animation_finished = true;
    },
    begin: function(){
      animation_playing = true;
    }
  })
  timeline.add({
    targets: '.background-fill',
    background: color_green,
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
    targets: '.background-fill',
    background: color_green,
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
        return height;
      }],
      borderRadius:['50%', '0%'],
    })
  .add({
    targets: ['#about-us p', '#malay', '#chinese', '#indian'],
    color: color_yellow
  }, 0)
  .add({      
    targets: '#about-us .container .row',
    borderColor: ['#000000','#FFD700'],
    }, 0)
  // .add({
  //   targets: ketupat_path,
  //   translateX: {
  //     value: -500,
  //     duration: 800,
  //     easing:'easeOutElastic(1, .8)'
  //   },

  //   strokeDashoffset: [ketupat_path_length, 0],
  //   easing:'easeInOutQuad',
  //   duration: 3000,
  //   opacity: [0, 100],
  //   begin: function() {
  //     ketupat_object.style.opacity = 1;  // Show the SVG when the animation starts
  //   }
  // })
  // .add({
  //   targets: lantern_path,
    
  //   translateY:{
  //     value: -800,
  //     duration: 800,
  //     easing:'easeOutElastic(1, .8)'
  //   },

  //   strokeDashoffset: [lantern_path_length, 0],
  //   easing:'easeInOutQuad',
  //   duration: 3000,
  //   opacity: [0, 100],
  //   begin: function() {
  //     lantern_object.style.opacity = 1;  // Show the SVG when the animation starts
  //   }
  //   }, 1000)
  timeline.type='m';
  return timeline;
}

function animate_c(){
  const timeline = anime.timeline({
    easing: 'easeInOutQuad',
    autoplay: false,
    complete: function(){
      animation_playing = false;
      animation_finished = true;
    },
    begin: function(){
      animation_playing = true;
    }
  })

  timeline.add({
    targets: '.background-fill',
    background: color_red,
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
    targets: '.background-fill',
    background: color_yellow,
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
        return height;
      }],
      borderRadius:['50%', '0%'],
    })
    .add({
      targets: ['#about-us p', '#malay', '#chinese', '#indian'],
      color: color_black
    },0)

  timeline.type= 'c';
  return timeline;
}

function animate_i(){
  const timeline = anime.timeline({
    easing: 'easeInOutQuad',
    autoplay: false,
    complete: function(){
      animation_playing = false;
      animation_finished = true;
    },
    begin: function(){
      animation_playing = true;
    }
  })

  timeline.add({
    targets: '.background-fill',
    background: color_black,
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
    targets: '.background-fill',
    background: color_purple,
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
        return height;
      }],
      borderRadius:['50%', '0%'],
    })
    .add({
      targets: ['#about-us p', '#malay', '#chinese', '#indian'],
      color: color_white
    },0)
    .add({      
      targets: '#about-us .container .row',
      borderColor: [color_black, color_white],
      },0)
  timeline.type= 'i';
  return timeline;
}

document.getElementById('malay').addEventListener('mouseover', function() {
  if(animation_playing){
    return;
  }

  if(current_timeline === null){
    current_timeline = animate_m();
    current_timeline.play();
  }

  else if(current_timeline.type != 'm'){
    current_timeline.reverse();
    current_timeline.play();

    current_timeline.finished.then(() => {
      current_timeline = animate_m();
      current_timeline.play();
    });
  }
  else if (current_timeline && current_timeline.type == 'm' && animation_finished){
    current_timeline.reverse();
    current_timeline.play();
    current_timeline.finished.then(()=>{
      current_timeline = null;
    });
  }

  next_timeline = null;
});

document.getElementById('chinese').addEventListener('mouseover', function() {
  if(animation_playing){
    return;
  }

  else if(current_timeline === null){
    current_timeline = animate_c();
    current_timeline.play();
  }

  else if(current_timeline.type != 'c'){
    current_timeline.reverse();
    current_timeline.play();

    current_timeline.finished.then(()=>{
      current_timeline = animate_c();
      current_timeline.play();
    });

  }
  else if (current_timeline && current_timeline.type == 'c' && animation_finished){
    current_timeline.reverse();
    current_timeline.play();

    current_timeline.finished.then(()=>{
      current_timeline = null;
    });
  }

  next_timeline = null;
});

document.getElementById('indian').addEventListener('mouseover', function() {
  if(animation_playing){
    return;
  }

  else if(current_timeline === null){
    current_timeline = animate_i();
    current_timeline.play();
  }

  else if(current_timeline.type != 'i'){
    current_timeline.reverse();
    current_timeline.play();

    current_timeline.finished.then(()=>{
      current_timeline = animate_i();
      current_timeline.play();
    });

  }
  else if (current_timeline && current_timeline.type == 'i' && animation_finished){
    current_timeline.reverse();
    current_timeline.play();

    current_timeline.finished.then(()=>{
      current_timeline = null;
    });
  }

  next_timeline = null;
});

