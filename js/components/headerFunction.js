const headerBar = document.querySelector('header');
const meniuIcon = document.querySelector('a.meniu-bar-icon');
const logoWhite = document.querySelector('.mainLogoWhite');
const logoBlack = document.querySelector('.mainLogoBlack');
const meniuSelectors1 = document.querySelector('nav > .item1');
const meniuSelectors2 = document.querySelector('nav > .item2');
const meniuSelectors3 = document.querySelector('nav > .item3');
const meniuSelectors4 = document.querySelector('nav > .item4');
const meniuSelectors5 = document.querySelector('nav > .item5');
const meniuSelectors6 = document.querySelector('nav > .item6');
const meniuSelectors7 = document.querySelector('nav > .item7');
const meniuSelectors8 = document.querySelector('nav > .item8');
window.onscroll = () => {
    if (window.pageYOffset > 0) {
        headerBar.classList.remove('headerBar');
        headerBar.classList.add('headerBar-white');
        logoWhite.classList.add('logo-hide');
        logoBlack.classList.add('logo-show');
        meniuIcon.classList.remove('meniu-bar-icon');
        meniuIcon.classList.add('meniu-bar-icon-black');
        meniuSelectors1.classList.remove('meniu-bar-selector');
        meniuSelectors1.classList.add('meniu-bar-selector-black');
        meniuSelectors2.classList.remove('meniu-bar-selector');
        meniuSelectors2.classList.add('meniu-bar-selector-black');
        meniuSelectors3.classList.remove('meniu-bar-selector');
        meniuSelectors3.classList.add('meniu-bar-selector-black');
        meniuSelectors4.classList.remove('meniu-bar-selector');
        meniuSelectors4.classList.add('meniu-bar-selector-black');
        meniuSelectors5.classList.remove('meniu-bar-selector');
        meniuSelectors5.classList.add('meniu-bar-selector-black');
        meniuSelectors6.classList.remove('meniu-bar-selector');
        meniuSelectors6.classList.add('meniu-bar-selector-black');
        meniuSelectors7.classList.remove('meniu-bar-selector');
        meniuSelectors7.classList.add('meniu-bar-selector-black');
        meniuSelectors8.classList.remove('meniu-bar-selector');
        meniuSelectors8.classList.add('meniu-bar-selector-black');
    } else {
        headerBar.classList.remove('headerBar-white');
        headerBar.classList.add('headerBar');
        logoWhite.classList.remove('logo-hide');
        logoBlack.classList.remove('logo-show');
        meniuIcon.classList.remove('meniu-bar-icon-black');
        meniuIcon.classList.add('meniu-bar-icon');
        meniuSelectors1.classList.remove('meniu-bar-selector-black');
        meniuSelectors1.classList.add('meniu-bar-selector');
        meniuSelectors2.classList.remove('meniu-bar-selector-black');
        meniuSelectors2.classList.add('meniu-bar-selector');
        meniuSelectors3.classList.remove('meniu-bar-selector-black');
        meniuSelectors3.classList.add('meniu-bar-selector');
        meniuSelectors4.classList.remove('meniu-bar-selector-black');
        meniuSelectors4.classList.add('meniu-bar-selector');
        meniuSelectors5.classList.remove('meniu-bar-selector-black');
        meniuSelectors5.classList.add('meniu-bar-selector');
        meniuSelectors6.classList.remove('meniu-bar-selector-black');
        meniuSelectors6.classList.add('meniu-bar-selector');
        meniuSelectors7.classList.remove('meniu-bar-selector-black');
        meniuSelectors7.classList.add('meniu-bar-selector');
        meniuSelectors8.classList.remove('meniu-bar-selector-black');
        meniuSelectors8.classList.add('meniu-bar-selector');
    }
    return;
}
export default headerBar