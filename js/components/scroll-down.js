document.getElementById('btn-sdown').addEventListener('click', scrollDown)

function scrollDown() {
    const id = 'About';
const yOffset = 0; 
const element = document.getElementById(id);
const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

window.scrollTo({top: y, behavior: 'smooth'});
}

export default scrollDown