window.onscroll = () => {
    const headerBar = document.querySelector('header');
    const bottomButton = document.querySelector('#backToTop')
    if (window.pageYOffset > 0) {
        headerBar.classList.remove('headerBar');
        headerBar.classList.add('headerBar-white');
        bottomButton.classList.remove('backToTopButton-hide');
        bottomButton.classList.add('backToTopButton');        
    } else {
        headerBar.classList.remove('headerBar-white');
        headerBar.classList.add('headerBar');
        bottomButton.classList.remove('backToTopButton');
        bottomButton.classList.add('backToTopButton-hide');
    }
    return;
}
export default headerBar