function meniuRender(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = ''
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        HTML += `<a class="${item.class}" href="${item.href}">${item.selectorname}</a>`;       
    }
    DOM.innerHTML = HTML;
}

export { meniuRender }