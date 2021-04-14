function renderPages(selector, numberOfPages){
    const DOM = document.querySelector(selector);
    let HTML = '<a href="#" class="pageArrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>'
    for (let i = 1; i <= numberOfPages; i++){
        HTML += `<a href="#" class="pageNumber">${i}</a>`;       
    }
    HTML += '<a href="#" class="pageArrow"><i class="fa fa-angle-right" aria-hidden="true"></i><a>';
    DOM.innerHTML = HTML;
}

export { renderPages }
    