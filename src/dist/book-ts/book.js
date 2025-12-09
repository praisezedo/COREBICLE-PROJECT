"use strict";
//access dom element 
const scrollUp = document.querySelectorAll('.scroll-animation-up');
const scrollSide = document.querySelectorAll('.scroll-animation-side');
// build observer 
const upobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-20");
            entry.target.classList.add("opacity-100", "translate-y-0");
        }
    });
});
const sideobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-x-20");
            entry.target.classList.add("opacity-100", "translate-x-0");
        }
    });
});
scrollUp.forEach(element => {
    upobserver.observe(element);
});
scrollSide.forEach(element => {
    sideobserver.observe(element);
});
const navigationMenu = document.getElementById('mobile-menu');
const displayMenuB = () => {
    navigationMenu.classList.remove('hidden');
};
const hideMenuB = () => {
    navigationMenu.classList.add('hidden');
};
//# sourceMappingURL=book.js.map