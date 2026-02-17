const API_KEY = "3bff8762dc8fc99eb52ade042064a91d";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

//UI : GESTION DU MENU NAV
function initNavigation() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const navbarMenuBtn = document.querySelector('.navbar-menu-btn');
    const navbarForm = document.querySelector('.navbar-form');
    const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
    const navbarSearchBtn = document.querySelector('.navbar-search-btn');

    if(navbarMenuBtn) {
        navbarMenuBtn.addEventListener('click', () => {
            header.classList.toggle('active');
            nav.classList.toggle('active');
            navbarMenuBtn.classList.toggle('active');
        });
    }

    const searchBarIsActive = () => navbarForm.classList.toggle('active');
    if(navbarSearchBtn) navbarSearchBtn.addEventListener('click', searchBarIsActive);
    if(navbarFormCloseBtn) navbarFormCloseBtn.addEventListener('click', searchBarIsActive);
}

//GESTION DE LA PAGE LISTE (index.html)
async function initListPage() {
    let currentPage = 1;
    const container = document.getElementById('characters-container'); // C'est le movies-grid
    const prevBtn = document.getElementById('prev-button');
    const nextBtn = document.getElementById('next-button');

    async function fetchMovies(page = 1) {
        try {
            const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`);
            const data = await response.json();
            displayMovies(data.results);
            updateButtons(data.page, data.total_pages);
        } catch (error) {
            container.innerHTML = '<p>Impossible de charger les films.</p>';
        }
    }

    function displayMovies(movies) {
        container.innerHTML = '';
        movies.forEach(movie => {
            const posterUrl = movie.poster_path ? `${IMG_URL}${movie.poster_path}` : 'https://via.placeholder.com/300x450?text=No+Image';
            const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';

            const card = document.createElement('div');
            card.classList.add('movie-card');
            
            // Structure HTML identique au template
            card.innerHTML = `
                <div class="card-head">
                    <img src="${posterUrl}" alt="${movie.title}" class="card-img">
                    <div class="card-overlay">
                        <div class="bookmark"><ion-icon name="bookmark"></ion-icon></div>
                        <div class="rating"><ion-icon name="star-outline"></ion-icon><span>${movie.vote_average.toFixed(1)}</span></div>
                        <div class="play"><ion-icon name="play-circle-outline"></ion-icon></div>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${movie.title}</h3>
                    <div class="card-info">
                        <span class="genre">TMDb</span>
                        <span class="year">${releaseYear}</span>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
    }

    function updateButtons(current, total) {
        prevBtn.disabled = current <= 1;
        nextBtn.disabled = current >= total;
    }

    prevBtn.addEventListener('click', () => { if (currentPage > 1) { currentPage--; fetchMovies(currentPage); } });
    nextBtn.addEventListener('click', () => { currentPage++; fetchMovies(currentPage); });

    fetchMovies(currentPage);
}


// Lancement au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    if (document.getElementById('characters-container')) initListPage();
});