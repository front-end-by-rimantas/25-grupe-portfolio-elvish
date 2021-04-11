import {isValidOurServices} from './isValidOurServices.js';
import {isValidourServiceItem} from './isValidOurServiceItem.js';

function ourServices(selector, data) {

    if (!isValidOurServices(selector, data)) {
        return false;
    }

    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas.');
        return false;
    }

    const {list, maxCount} = data;

    let HTML = '';
    let generatedOurServicesCount = 0;

    for (let i = 0; i < list.length; i++) {
        const ourService = list[i];

        if (!isValidourServiceItem(ourService) ||
            !ourService.active) {
                continue;
            }

        if (generatedOurServicesCount === maxCount) {
            break;
        }

        generatedOurServicesCount++;
        HTML +=  `<div class="our-services-item">
                    <i class="services-icon fa fa-${ourService.icon}" aria-hidden="true"></i>
                        <h2 class="title">${ourService.title}</h2>
                        <p class="paragraph">${ourService.description}</p>
                  </div>`;

    }

    // post logic validation

    // npm run devreturn rezult

    DOM.innerHTML = HTML;
}

export {ourServices}