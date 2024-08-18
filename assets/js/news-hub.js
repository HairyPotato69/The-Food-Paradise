// const apiKey = 'fd448bf94db043b48c2a3f0c228f8b0b';
const apiKey = 'dbddeef57b58421aafd6a26534fd9d8d';
const newsContainer = document.getElementById('news-container');
const searchInput = document.getElementById('search-input');
const sortOrder = document.getElementById('sort-order');
const categoryFilter = document.getElementById('category-filter');
// const languageFilter = document.getElementById('language-filter');
const screenLoading = document.getElementById('screen-loading');
const noResultsMessage = document.createElement('div');

noResultsMessage.className = 'col-12 text-center';
noResultsMessage.innerHTML = '<p>No results found.</p>';

let allNews = [];
async function fetchNews() {
    try {
        // const language = languageFilter.value;
        // const response = await fetch(`https://newsapi.org/v2/everything?apiKey=${apiKey}&q=Malaysian+cuisine+OR+Malaysian+restaurant+OR+Malaysian+food&language=${language}&pageSize=100`);
        const response =  await fetch('./assets/data/newsapi.json');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        allNews = data.articles.filter(article =>
            article.title && article.description && article.url && article.urlToImage && article.publishedAt
        );

        displayNews(allNews);
    } catch (error) {
        console.error('Error fetching news:', error);
    } finally {
        screenLoading.style.display = 'none';
    }
}

function displayNews(news) {
    newsContainer.innerHTML = '';

    if (news.length === 0) {
        newsContainer.appendChild(noResultsMessage);
        return;
    }

    news.forEach(article => {
        const card = createNewsCard(article);
        newsContainer.appendChild(card);
    });
}

function createNewsCard(article) {
    const card = document.createElement('div');
    card.className = 'col-md-12 mb-4 news-card';
    card.innerHTML =
        `<div class="card h-100 p-4">
        <a href="${article.url}" target="_blank" class="d-flex flex-column flex-md-row justify-content-between">
            <div class="order-2 order-md-1 me-md-4">
                <div class="d-flex flex-column justify-content-between h-100">
                    <div>
                        <h5 class="fw-bold">${article.title}</h5>
                        <p class="text-muted">${article.description}</p>
                    </div>
                    <div>
                        <small class="text-muted">${article.author}• ${formatPublishedDate(article.publishedAt)}</small>
                    </div>
                </div>
            </div>
            <img src="${article.urlToImage || 'https://via.placeholder.com/300x200'}"
                 class="img-fluid fixed-size order-1 order-md-2 rounded-3 mb-3 mb-md-0"
                 alt="${article.title}">
        </a>
        </div>`;

    return card;
}

function filterNews() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const sortByDate = sortOrder.value;

    let filteredNews = allNews.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm) || article.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || article.title.toLowerCase().includes(category);
        return matchesSearch && matchesCategory;
    });

    if (sortByDate === 'newest') {
        filteredNews.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    } else {
        filteredNews.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
    }

    animateNewsCards(filteredNews);
}

function animateNewsCards(filteredNews) {
    const cards = document.querySelectorAll('.news-card');
    cards.forEach(card => {
        card.classList.add('filtered-out');
    });

    setTimeout(() => {
        displayNews(filteredNews);
        setTimeout(() => {
            const newCards = document.querySelectorAll('.news-card');
            newCards.forEach(card => {
                card.classList.remove('filtered-out');
            });
        }, 50);
    }, 300);
}

function formatPublishedDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

searchInput.addEventListener('input', filterNews);
sortOrder.addEventListener('change', filterNews);
categoryFilter.addEventListener('change', filterNews);
// languageFilter.addEventListener('change', fetchNews);
document.addEventListener('DOMContentLoaded', fetchNews)