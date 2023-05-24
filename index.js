const HAMBURGER = document.querySelector('.hamburger');
const MENU = document.querySelector('.menu');
const MENU_LINK = document.querySelectorAll('.menu__link');
const BODY = document.querySelector('body');

window.addEventListener('click', function (e) {
    if (!MENU.contains(e.target) && !HAMBURGER.contains(e.target)) {
        MENU.classList.remove('open');
        HAMBURGER.classList.remove('rotate');
        BODY.classList.remove('unscroll');
    }
});

HAMBURGER.addEventListener('click', ()=> {
    MENU.classList.toggle('open');
    HAMBURGER.classList.toggle('rotate');
    BODY.classList.toggle('unscroll');
})

MENU.addEventListener('click', (e)=>{
    if(e.target.classList['value'] === 'menu__link'){
        MENU.classList.remove('open');
        HAMBURGER.classList.remove('rotate');
        BODY.classList.remove('unscroll');
    }
});

const goTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", trackScroll);

goTopBtn.addEventListener("click", goTop);

function trackScroll() {

    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight/2;

  if (scrolled > coords) {

        goTopBtn.classList.add("back-to-top--show");

    } else {
        goTopBtn.classList.remove("back-to-top--show");
    }
}

function goTop() {
 
    if (window.pageYOffset > 0) {
    
        window.scrollBy(0, -20); 
        setTimeout(goTop, 0); 
        
    }
}

