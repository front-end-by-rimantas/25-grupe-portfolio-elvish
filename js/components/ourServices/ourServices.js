import {isValidOurServices} from './isValidOurServices.js';
// import {isValidourServicesItem} from './isValidOurServicesItem.js';

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

        // if (!isValidourServicesItem(ourServices) ||
        //     !ourServices.active) {
        //         continue;
        //     }

        if (generatedOurServicesCount === maxCount) {
            break;
        }

        generatedOurServicesCount++;
        HTML +=  `<div class="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 services-item">
                    <i class="services-icon fa fa-${ourService.icon}" aria-hidden="true"></i>
                        <h2>${ourService.title}</h2>
                        <p>${ourService.description}</p>
                  </div>`;

    }

    // post logic validation

    // npm run devreturn rezult

    DOM.innerHTML = HTML;
}

export {ourServices}