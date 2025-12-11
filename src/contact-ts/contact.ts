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

const navMenuContact = document.getElementById('mobile-menu')! as HTMLElement;

const displayMenuC = () => {
    navMenuContact.classList.remove('hidden');
}

const hideMenuC = () => {
    navMenuContact.classList.add('hidden');
}

const emailValue = document.getElementById('email')! as HTMLInputElement;
const emailResultC = document.getElementById('email-result')! as HTMLElement;

const validateEmailC = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm;
    if (emailPattern.test(email)) {
        emailResultC.textContent = null;
    }
    else {
        emailResultC.textContent = "Please enter a valid email address.";
    }
}

emailValue.addEventListener('input' , () => {
    validateEmailC(emailValue.value);
})

//popup section
const popup = document.getElementById('popup')! as HTMLDivElement;
const closePopupBtn = document.getElementById('close-popup')! as HTMLButtonElement;
const contactBtn = document.getElementById('contact-btn')! as HTMLButtonElement;

const displayPopupC = () => {
    popup.classList.remove('hidden');
}

const hidePopupC = () => {
    popup.classList.add('hidden');
}

contactBtn.addEventListener('click' , () => {
    displayPopupC();
});

closePopupBtn.addEventListener('click' , () => {
    hidePopupC();
    window.location.reload();
});