function renderCategories(selector, data, columnName){
    const DOM = document.querySelector(selector);
    let HTML = `<h2 class="blog-titles">${columnName}</h2>`;
    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="categories">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                    ${data[i]}                    
                </div>`;       
    }
    DOM.innerHTML = HTML;
}

export { renderCategories }
    