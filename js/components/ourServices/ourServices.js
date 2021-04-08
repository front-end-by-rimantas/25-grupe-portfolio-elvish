function ourServices(selector, data) {

    const DOM = document.querySelector(selector);
    const {list, maxCount} = data;

    let HTML = '';
    let generatedOurServicesCount = 0;

    for (let i = 0; i < list.length; i++) {
        const ourService = list[i];
        

        if (!ourService.active) {
            continue;
        }

        if (generatedOurServicesCount === maxCount) {
            break;
        }

        generatedOurServicesCount++;
        HTML +=  `<div class="services-item">
                        <i class="services-icon fa fa-${ourService.icon}" aria-hidden="true"></i>
                        <h2 class="title">${ourService.title}</h2>
                        <p class="paragraph">${ourService.description}</p>
                     </div>`;
    }   


    DOM.innerHTML = HTML;
    
}

export {ourServices}
