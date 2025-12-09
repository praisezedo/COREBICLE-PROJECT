"use strict";
const scrollAnimationRight = document.querySelectorAll('.animate-scroll-animate-right');
const scrollAnimationUp = document.querySelectorAll('.animate-scroll-animate-up');
// right side scroll animation  section
const rightObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-x-20");
            entry.target.classList.add("opacity-100", "translate-x-0");
        }
    });
});
// up scroll animation observer
const upObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-20");
            entry.target.classList.add("opacity-100", "translate-y-0");
        }
    });
});
// scroll right animation observer
scrollAnimationRight.forEach(elment => {
    rightObserver.observe(elment);
});
// scroll up animation observer
scrollAnimationUp.forEach(elment => {
    upObserver.observe(elment);
});
const menu = document.getElementById("mobile-menu");
function hideMenuS() {
    menu.classList.add("hidden");
}
function displayMenuS() {
    menu.classList.remove("hidden");
}
//# sourceMappingURL=service.js.map