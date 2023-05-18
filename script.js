let btnMob = document.querySelector('.menu'),
      btn = document.querySelector('.menu'),
      header = document.querySelector('.header'),
      nav = document.querySelector('.nav'),
      navUl = document.querySelector('.nav__ul'),
      line = document.querySelector('.line'),
      pine = document.querySelector('.pine'),
      vine = document.querySelector('.vine'),
      sine = document.querySelector('.sine'),
      body = document.querySelector('body');
      

btnMob.addEventListener("click", () =>{
    header.classList.toggle('hide');
    line.classList.toggle('vine');
    pine.classList.toggle('sine');
    navUl.classList.toggle('column');
    nav.classList.toggle('mob');
    body.classList.toggle('no-scroll');
});



