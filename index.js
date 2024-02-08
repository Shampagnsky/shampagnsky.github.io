const buttons = document.querySelectorAll('.answer__btn');
const answers = document.querySelectorAll('.answer__answer');
const headers = document.querySelectorAll('.answer__header');
const ups = document.querySelectorAll('.down');

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {

        const isOpen = this.parentElement.nextElementSibling.style.display === 'block';

    
        answers.forEach(answer => {
            answer.style.display = 'none';
        });

    
        headers.forEach(header => {
            header.classList.remove('answerBack');
        });
        buttons.forEach(btn => {
            btn.classList.remove('btnBack');
        });
        ups.forEach(up => {
            up.classList.remove('arrUp');
        });
        if (!isOpen) {
            this.parentElement.nextElementSibling.style.display = 'block';
            this.parentElement.classList.add('answerBack');
            this.classList.add('btnBack');
            ups[index].classList.add('arrUp');
        }
    });
});
// =======================================================================================
let btnMob = document.querySelector('.menu'),
      btn = document.querySelector('.menu'),
      link = document.querySelectorAll('.nav__link'),
      promo = document.querySelector('.promo__content'),
      phone = document.querySelector('.phonewrap'),
      logo = document.querySelector('.logo'),
      nav = document.querySelector('.nav'),
      navUl = document.querySelector('.nav__ul'),
      line = document.querySelector('.line'),
      pine = document.querySelector('.pine'),
      vine = document.querySelector('.vine'),
      sine = document.querySelector('.sine'),
      body = document.querySelector('body');
      
let isMenuOpen = false;
btnMob.addEventListener("click", () =>{
    promo.classList.toggle('hide');
    phone.classList.toggle('hide');
    logo.classList.toggle('hide');
    line.classList.toggle('vine');
    pine.classList.toggle('sine');
    navUl.classList.toggle('column');
    nav.classList.toggle('mob');
    body.classList.toggle('no-scroll');
    isMenuOpen = !isMenuOpen;
    link.forEach(size => {
        if (isMenuOpen) {
            size.classList.add('active');
        } else {
            size.classList.remove('active');
        }
    });
});
// =============================carousel===========================================

function moveSlide(direction) {
    const logos = document.querySelector('.firma__logo');
    const slides = document.querySelectorAll('.firma__card');
    if (direction === 'left') {
        logos.appendChild(slides[0]);
    } else {
        logos.insertBefore(slides[slides.length - 1], slides[0]);
    }
}
const leftButton = document.querySelector('.firma__button--left');
const rightButton = document.querySelector('.firma__button--right');

leftButton.addEventListener('mousedown', function() {
    this.style.backgroundColor = '#6A32B4';
});

leftButton.addEventListener('mouseup', function() {
    this.style.backgroundColor = '', 
    this.style.transition = '0.3s';
});

rightButton.addEventListener('mousedown', function() {
    this.style.backgroundColor = '#6A32B4'; 
});

rightButton.addEventListener('mouseup', function() {
    this.style.backgroundColor = '',
    this.style.transition = '0.3s';
});
