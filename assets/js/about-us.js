const about_us_section = document.getElementById('about-us');
const test = about_us_section.getBoundingClientRect();
const width = test.width;
const height = test.height;

const menuButton = document.querySelector('#menu-button')
const rootElement = document.documentElement

const color_black = '#151618';
const color_green = '#2F452D';
const color_red = '#C21807';
const color_yellow = '#FFD700';
const color_purple = '#702963';
const color_white = '#fefefe';

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


const quotes = [
  { text: "Food is the ingredient that binds us together.", author: "Anonymous" },
  { text: "Cooking is an art, but all art requires knowing something about the techniques and materials.", author: "Nathan Myhrvold" },
  { text: "One cannot think well, love well, sleep well, if one has not dined well.", author: "Virginia Woolf" },
  { text: "The secret of success in life is to eat what you like and let the food fight it out inside.", author: "Mark Twain" },
  { text: "The only thing I like better than talking about food is eating.", author: "John Walters" }
];

// Function to select a random quote
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to display the quote
function displayQuote() {
  const quote = getRandomQuote();
  document.getElementById('quote-text').textContent = quote.text;
  document.getElementById('quote-author').textContent = `${ quote.author }`;
}

// Display a new quote every time the page loads
displayQuote();