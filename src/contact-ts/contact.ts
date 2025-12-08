const scrollUpAnimationContactSection = document.querySelectorAll<HTMLElement>('.animate-scroll-up');
const scrollSideAnimationContactSection = document.querySelectorAll<HTMLElement>('.animate-scroll-side');

const observerUp = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0' , 'translate-y-20');
        entry.target.classList.add('opacity-100', 'translate-y-0');
    }
   })
})

const observerSide = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0' , 'translate-x-20');
            entry.target.classList.add('opacity-100', 'translate-x-0');
        }
    })
})
scrollUpAnimationContactSection.forEach(element => {
    observerUp.observe(element);
})

scrollSideAnimationContactSection.forEach(element => {
    observerSide.observe(element);
})