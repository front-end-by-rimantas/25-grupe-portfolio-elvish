function reviewsRender(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = ''
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        HTML += `<div class="ourClientsReviews">
        <i class="fa fa-user-circle-o userIcon" aria-hidden="true"></i>
        <h3>${item.name}</h3>
        <h4>${item.site}</h4>
        <p>${item.review}</p>
    </div>`;       
    }
    DOM.innerHTML = HTML;
}

export { reviewsRender }