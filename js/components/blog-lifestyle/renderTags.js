function renderTags(selector, data){
    const DOM = document.querySelector(selector);
    let HTML = `<h2 class="blog-titles">Tags</h2>`;
    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="tag">${data[i]}</div>`; 
    }
    DOM.innerHTML = HTML;
}

export { renderTags }