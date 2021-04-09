function meniuScrollDown(selection) {
    const id = `${selection}`;
    const yOffset = 0; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset;

window.scrollTo({top: y, behavior: 'smooth'});
}

export default meniuScrollDown