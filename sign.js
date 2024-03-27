// form loading animation

const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*500);
})

function register(){
    //auth 
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info 
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password)
})
}