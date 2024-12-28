const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const questions = document.querySelectorAll('.accordionItem .question')
const email = document.getElementById('email')
const errorMessage = document.getElementById('errorMessage')
const button = document.getElementById('button')


menu.addEventListener('click', () =>{
    document.querySelector('.mobileNav .navLinks').classList.remove('hide');
    document.querySelector('body').style.overflow = 'hidden';
});

close.addEventListener('click', () => {
    document.querySelector('.mobileNav .navLinks').classList.add('hide')
    document.querySelector('body').style.overflow = 'scroll';
});

questions.forEach((question) =>{
    question.addEventListener('click', () =>{
        const answer = question.nextElementSibling
        answer.classList.toggle('hide')
    })
});

button.addEventListener('click', () => {
    if(email.value.trim() === ''){
        errorMessage.classList.remove('hide')
        errorMessage.innerText = 'Whoops. Make sure its an email';
        email.classList.add('error')
    }else{
        location.reload();
    }
})