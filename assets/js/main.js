
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