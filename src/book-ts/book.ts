//access dom element 
const scrollUp = document.querySelectorAll<HTMLElement>('.scroll-animation-up');
const scrollSide = document.querySelectorAll<HTMLElement>('.scroll-animation-side');
// build observer 
const upobserver = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.remove("opacity-0","translate-y-20");
entry.target.classList.add("opacity-100","translate-y-0");
}
})
})

const sideobserver = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting) {
    entry.target.classList.remove("opacity-0","translate-x-20");
    entry.target.classList.add("opacity-100","translate-x-0");
}
})
})

scrollUp.forEach(element => {
upobserver.observe(element);
})

scrollSide.forEach(element => {
sideobserver.observe(element);
})

const navigationMenu = document.getElementById('mobile-menu')! as HTMLElement; 

const  displayMenuB = () => {
navigationMenu.classList.remove('hidden');
}

const  hideMenuB = () => {
navigationMenu.classList.add('hidden');
}

const workSpaceInput = document.getElementById('workspace-input')! as HTMLSelectElement;
const amountInput = document.getElementById('amount')! as HTMLInputElement;
const currencyInput = document.getElementById('currency')! as HTMLSelectElement;
const bookButton = document.getElementById('bookbtn')! as HTMLButtonElement;
const suscriptionPlanInput = document.getElementById('plan')! as HTMLSelectElement;

// book menu function 
const dailyRegularAmount:number = 1500;
const premiumdailyPlanAmount:number = 2000; 
const privateDailyPlanAmount:number = 2000;
const privateOfficeplanAmount:number = 5000;

function updateAmount() {
  const workspaceValue = workSpaceInput.value;

  switch(workspaceValue) {
    case 'regular-space':
      if (suscriptionPlanInput.value === 'daily') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${dailyRegularAmount}`
          : `$${(dailyRegularAmount / 460).toFixed(2)}`;
      } 
      else if (suscriptionPlanInput.value === 'monthly') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${dailyRegularAmount * 30}`
          : `$${((dailyRegularAmount * 30) / 460).toFixed(2)}`;
      }
      else if (suscriptionPlanInput.value === 'yearly') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${dailyRegularAmount * 365}`
          : `$${((dailyRegularAmount * 365) / 460).toFixed(2)}`;
      }
      break;

    case 'premium-space':
      if (suscriptionPlanInput.value === 'daily') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${premiumdailyPlanAmount}`
          : `$${(premiumdailyPlanAmount / 460).toFixed(2)}`;
      } 
      else if (suscriptionPlanInput.value === 'monthly') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${premiumdailyPlanAmount * 30}`
          : `$${((premiumdailyPlanAmount * 30) / 460).toFixed(2)}`;
      } 
      else if (suscriptionPlanInput.value === 'yearly') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${premiumdailyPlanAmount * 365}`
          : `$${((premiumdailyPlanAmount * 365) / 460).toFixed(2)}`;
      }
      break;

    case 'private-space':
      if (suscriptionPlanInput.value === 'daily') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${privateDailyPlanAmount}`
          : `$${(privateDailyPlanAmount / 460).toFixed(2)}`;
      } 
      else if (suscriptionPlanInput.value === 'monthly') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${privateDailyPlanAmount * 30}`
          : `$${((privateDailyPlanAmount * 30) / 460).toFixed(2)}`;
      } 
      else if (suscriptionPlanInput.value === 'yearly') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${privateDailyPlanAmount * 365}`
          : `$${((privateDailyPlanAmount * 365) / 460).toFixed(2)}`;
      }
      break;

    case 'private-office':
      if (suscriptionPlanInput.value === 'daily') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${privateOfficeplanAmount}`
          : `$${(privateOfficeplanAmount / 460).toFixed(2)}`;
      } 
      else if (suscriptionPlanInput.value === 'monthly') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${privateOfficeplanAmount * 30}`
          : `$${((privateOfficeplanAmount * 30) / 460).toFixed(2)}`;
      } 
      else if (suscriptionPlanInput.value === 'yearly') {
        amountInput.value = currencyInput.value === 'naira'
          ? `₦${privateOfficeplanAmount * 365}`
          : `$${((privateOfficeplanAmount * 365) / 460).toFixed(2)}`;
      }
      break;
  }
}

updateAmount();

workSpaceInput.addEventListener('change', updateAmount);
currencyInput.addEventListener('change', updateAmount);
suscriptionPlanInput.addEventListener('change', updateAmount);

// comfirm booking button event listener 
const bookPopup = document.getElementById('popup')! as HTMLDivElement;

const displayPopup = () => {
    bookPopup.classList.remove('hidden');
}
const  hidePopup = ()  => {
    bookPopup.classList.add('hidden');
}

const closePopupButton = document.getElementById('close-popup')! as HTMLButtonElement;

bookButton.addEventListener('click' , (e) => {
    e.preventDefault();
    displayPopup();
})

closePopupButton.addEventListener('click' , () => {
    hidePopup();
    window.location.reload();
})

const emailInput = document.getElementById('email-input')! as HTMLInputElement;
const phoneInput = document.getElementById('phone-input')! as HTMLInputElement;
const emailResult = document.getElementById('email-result')! as HTMLElement;
const phoneResult = document.getElementById('phone-result')! as HTMLElement;


const emailValidation = (email:string) => {
const emailPattern = /^[0-9a-z]+@[\w{3,5}]+\.\w{2,3}$/gm;
   if (emailPattern.test(email.trim())) {
      emailResult.textContent = null;
   }
   else {
    emailResult.textContent = "Invalid email format";
   }
}

emailInput.addEventListener('input' , (e) => {
    const email = (e.target as HTMLInputElement).value;
    emailValidation(email);
})

const phoneValidation = (phone:string) => {
const phonePattern = /^(?:\+234|0)([789][01]\d{8})$/gm;
    if (phonePattern.test(phone.trim())) {
         phoneResult.textContent = null
         }
    else {
        phoneResult.textContent = "Invalid phone number format. Use +234XXXXXXXXXX or 0XXXXXXXXXX";
    }
}

phoneInput.addEventListener('input' , (e) => {
    const phone = (e.target as HTMLInputElement).value;
    phoneValidation(phone);
})
