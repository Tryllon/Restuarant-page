
// burger start ============================================================================

const nav = document.querySelector('.menu__items');
const burger = document.querySelector('.menu__burger');

function showmMenu(){
    nav.classList.toggle('show');
}
burger.addEventListener('click', showmMenu);

// burger end ================================================================================



// removeMenu start  =========================================================================

const navItem = document.querySelectorAll('.menu__item-link');

function removeMenu() {
    nav.classList.remove('show');
}
navItem.forEach(n=> n.addEventListener('click', removeMenu));

// removeMenu end =============================================================================



// scroll start  ==============================================================================

const scrollY = window.pageXOffset;
const navMenu = document.querySelector('.menu')

function boxShadowMenu() {
    if (this.scrollY >= 200)
        navMenu.classList.add('sticky');
    else
        navMenu.classList.remove('sticky');
}
window.addEventListener('scroll', boxShadowMenu)

// scroll end  ==============================================================================



// ScrollReveal ==============================================================================

const srRight = ScrollReveal({
    origin: 'right',
    distance: '200%',
    duration: 1000,
})
srRight.reveal(`.about__description,.app__description`, {
    easing: 'cubic-bezier(0,0,0,0)',
    }
)
const srRightRotate = ScrollReveal({
    origin: 'right',
    distance: '200%',
    duration: 1000,
})

srRightRotate.reveal(`.banner__img`, {
    easing: 'cubic-bezier(0,0,0,0)',
    rotate: {
        z: 180
    }
})
const srRotate = ScrollReveal({
    distance: '0px',
    duration: 1000,


})

srRotate.reveal(`.footer__social-link`, {
    easing: 'cubic-bezier(0,0,0,0)',
    rotate: {
        z: -180
    }
})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '200%',
    duration: 1000,
})
srLeft.reveal(`.about__img, .banner__description,.app__img`,{
        easing: 'cubic-bezier(0,0,0,0)'});


const srTop = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
})
srTop.reveal(` .services__title ,.services__subtitle,.services__box,.special__title,.special__subtitle,.special__box,.contact__title,.contact__subtitle,.contact__text,.contact__btn`,{
        easing: 'cubic-bezier(0,0,0,0)'});