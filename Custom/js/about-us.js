const menuButton = document.querySelector('#menu-button')
const rootElement = document.documentElement

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