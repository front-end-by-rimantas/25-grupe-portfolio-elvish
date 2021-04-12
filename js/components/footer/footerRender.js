function footerRender(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = ''
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        HTML += `<a href="${item.href}" class="${item.class}" target="_blank"></a>`;       
    }
    DOM.innerHTML = HTML;
}

export { footerRender }