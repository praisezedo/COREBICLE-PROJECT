"use strict";
// scroll animation for core services and why choose us sections
const scrollUpAnimation = document.querySelectorAll('.scroll-animate');
const scrollSideAnimation = document.querySelectorAll('.scroll-animate-side');
const scrollLeftAnimation = document.querySelectorAll('.scroll-animate-left');
const bookBtn = document.getElementById('book-btn');
// scroll up animation observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-20");
            entry.target.classList.add("opacity-100", "translate-y-0");
        }
    });
});
// scroll up animation observer
scrollUpAnimation.forEach(element => {
    observer.observe(element);
});
// side scroll animation observer
const sideObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "-translate-x-20");
            entry.target.classList.add("opacity-100", "translate-x-0");
        }
    });
});
// scroll side animation observer
scrollSideAnimation.forEach(element => {
    sideObserver.observe(element);
});
// left side scroll animation  section
const leftObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-x-20");
            entry.target.classList.add("opacity-100", "translate-x-0");
        }
    });
});
// scroll left animation observer
scrollLeftAnimation.forEach(element => {
    leftObserver.observe(element);
});
const navMenu = document.getElementById('mobile-menu');
// display menu function
function displayMenu() {
    navMenu.classList.remove('hidden');
}
function hideMenu() {
    navMenu.classList.add('hidden');
}
// load background image
document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("home");
    if (!section)
        return;
    const bgUrl = section.getAttribute("data-bg");
    if (!bgUrl)
        return;
    const img = new Image();
    img.src = bgUrl;
    img.onload = () => {
        section.style.backgroundImage = `url('${bgUrl}')`;
        section.classList.add("fade-in");
    };
});
//# sourceMappingURL=corebicle.js.map