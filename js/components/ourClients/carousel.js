let activeSliderIndex = 0;
const autoRotateInt = 10000;

function carousel() {
    const sliderButtons = document.querySelectorAll('.slider');
    const list = document.querySelector('.reviewsList');
    for (let i = 0; i < sliderButtons.length; i++) {
        const slider = sliderButtons[i];
        slider.i = i;
        slider.addEventListener('click', changeSlide);
    }

    function changeSlide(e) {
        sliderButtons[activeSliderIndex].classList.remove('sliderActive');
        activeSliderIndex = e.target.i;
        e.target.classList.add('sliderActive');
        list.style.marginLeft = `-${activeSliderIndex}00%`;
    }

    function autoRotateSlide() {
        sliderButtons[activeSliderIndex].classList.remove('sliderActive');
        activeSliderIndex = ++activeSliderIndex % sliderButtons.length;
        sliderButtons[activeSliderIndex].classList.add('sliderActive');
        list.style.marginLeft = `-${activeSliderIndex}00%`;
    }

    setInterval(autoRotateSlide, autoRotateInt);
}

export { carousel }
