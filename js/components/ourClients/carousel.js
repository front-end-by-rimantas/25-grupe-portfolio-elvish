let activeSliderIndex = 0;

function carousel() {
    const sliderButtons = document.querySelectorAll('.slider');
    const list = document.querySelector('.reviewsList');
    for(let i = 0; i < sliderButtons.length; i++){
        const slider = sliderButtons[i];
        slider.addEventListener('click', () => {
            sliderButtons[activeSliderIndex].classList.remove('sliderActive');
            activeSliderIndex = i;
            slider.classList.add('sliderActive');
            list.style.marginLeft = `-${i}00%`;
        });
    }
}

export { carousel }