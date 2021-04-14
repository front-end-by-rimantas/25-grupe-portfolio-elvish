import { isValidGreatPeople } from './isValidGreatPeople.js';
import { isValidClient } from './isValidClient.js';

function renderGreatPeople(selector, data) {

    if (!isValidGreatPeople(selector, data)) {
        return false;
    }

    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas.');
        return false;
    }
    const { imgPath, list } =  data;
    let HTML = '';

    for (let i = 0; i < list.length; i++) {
        const client = list[i];

        if (!isValidClient(client)){
            continue;
        }
        
        HTML += `<div class="col-12 col-lg-2"><img src="${imgPath + client.link}" alt="${client.title}"></div>`;
    }
        DOM.innerHTML = HTML;
}

export { renderGreatPeople }