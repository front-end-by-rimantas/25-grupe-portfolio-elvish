const bottomButton = document.querySelector('.backToTopButton-hide');

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        bottomButton.classList.remove('backToTopButton-hide');
        bottomButton.classList.add('backToTopButton');
            } else {
                bottomButton.classList.remove('backToTopButton');
                bottomButton.classList.add('backToTopButton-hide');
            }
        return;
    }
export default bottomButton