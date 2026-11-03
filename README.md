# D&A Movies

#### Video Demo:  [youtube link](https://youtu.be/dtnpHftvOEA)

#### Description:

**D&A Movies** is a dynamic, responsive, and interactive web application designed for cinema enthusiasts who want to discover trending movies, view detailed information, and enjoy a seamless browsing experience. This project serves as my final submission for CS50, synthesizing the core concepts of web development I have learned, including HTML5 structure, CSS3 styling, and asynchronous JavaScript programming.

### Overview and Motivation
In an era of endless streaming options, "choice paralysis" is a real issue. I wanted to build a platform that cuts through the noise and immediately presents the user with what matters: the most popular movies of the moment. My goal was to replicate the polished, dark-themed aesthetic of major streaming platforms like Netflix or Prime Video, but powered by real-time data from **The Movie Database (TMDb) API**.

### Key Features

1.  **Immersive "Dark Mode" UI:**
    The application features a modern, dark-themed design (using shades of "Rich Black" and "Oxford Blue") which is standard for cinema applications to reduce eye strain and make the movie posters pop.

2.  **Dynamic Content Loading:**
    Upon loading, the site fetches the latest popular movies from the TMDb API. This ensures the content is always up-to-date without manual intervention.

3.  **Interactive Movie Grid:**
    Movies are displayed in a responsive grid. I implemented a hover effect using CSS transitions: when a user hovers over a card, an overlay appears showing the rating star, a bookmark icon, and a play button. This adds a layer of interactivity and polish to the user experience.

4.  **Pagination System:**
    To handle the vast amount of data available via the API, I built a pagination system. The "Previous" and "Next" buttons allow users to navigate through thousands of movie titles. The JavaScript logic updates the current page number and triggers a new fetch request to reload the grid with new data.

5.  **Detailed Movie View:**
    Clicking on any movie card redirects the user to `details.html`. This page uses URL parameters (e.g., `?id=550`) to identify the selected movie. The script then fetches specific metadata for that ID, including the high-resolution poster, full synopsis, release date, runtime, and genres.

### Technical Implementation

I chose to build **D&A Movies** using a "Vanilla" stack (HTML, CSS, JS) without heavy frameworks like React or Bootstrap. This was a deliberate choice to demonstrate my mastery of the underlying technologies of the web.

* **HTML5:** I used semantic tags (`<header>`, `<main>`, `<section>`, `<footer>`) to ensure the code is accessible and well-structured.
* **CSS3:**
    * **Variables (`:root`):** I defined a color palette using CSS variables to maintain consistency across all pages.
    * **Flexbox & Grid:** I utilized CSS Grid for the movie layout (`grid-template-columns: repeat(auto-fill, minmax(180px, 1fr))`) to ensure the cards resize perfectly on mobile, tablet, and desktop screens.
    * **Media Queries:** The site is fully responsive. On mobile devices, the navigation bar adapts to a "burger menu" style (controlled via JS), and the layout shifts to a single column.
* **JavaScript (ES6+):**
    * **Async/Await:** I used asynchronous functions to handle API requests via `fetch()`. This prevents the UI from freezing while waiting for data.
    * **DOM Manipulation:** The HTML for the movie cards is not hardcoded. It is generated dynamically by JavaScript loops that parse the JSON response from the API.
    * **Error Handling:** I implemented logic to handle missing images. If a movie lacks a poster, a default placeholder is displayed to preserve the layout integrity.

### Challenges Faced
One of the biggest challenges during development was managing the CSS architecture. Initially, I struggled with conflicting styles when trying to merge a template design with my own API logic. I had to refactor the CSS file completely, removing redundant classes and ensuring that my dynamically generated JavaScript elements (`.movie-card`) matched the CSS selectors defined in the stylesheet.

Another challenge was passing data between pages without a backend database. I solved this by utilizing `window.location.search` and `URLSearchParams` to pass the Movie ID from the main page to the details page via the URL query string.

### Future Improvements
In the future, I plan to expand **D&A Movies** by adding:
* A fully functional search bar (the UI is ready, the logic needs to be connected to the Search endpoint of the API).
* A "Watchlist" feature using the browser's `localStorage` to save favorite movies.
* Trailer integration on the details page.

This project has been an incredible learning experience, bridging the gap between theoretical computer science concepts and practical software engineering.