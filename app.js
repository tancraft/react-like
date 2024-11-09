import HomePage from './src/pages/HomePage.js';

document.addEventListener('DOMContentLoaded', () => {
    const homePage = new HomePage();
    homePage.render();
});

// Exemples de délégation d’événements dans HomePage ou app.js
document.body.addEventListener('click', (event) => {
    if (event.target.matches('header-component button')) {
        console.log('Header button clicked');
    }
    if (event.target.matches('footer-component button')) {
        console.log('Footer button clicked');
    }
});


// Capture de l’événement dans HomePage ou app.js
document.body.addEventListener('header-loaded', (event) => {
    console.log(event.detail.message); // Affiche "header has been loaded"
});

// Capture de l’événement dans HomePage ou app.js
document.body.addEventListener('footer-loaded', (event) => {
    console.log(event.detail.message); // Affiche "Footer has been loaded"
});

// Capture de l’événement dans HomePage ou app.js
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', () => {
        console.log("Window resized");
    });
});


