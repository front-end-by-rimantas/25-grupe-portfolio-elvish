function ourServices(selector, data) {


    const DOM = document.querySelector(selector);
    const ourServicesArray = data.list;

    let HTML = '';

    for (let i = 0; i < ourServisesArray.lenght; i++) {
        const ourService = ourServicesArray[i];

        if (!ourService.active) {
            continue;
        }

        HTML +=  `<div class="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 services-item">
                        <i class="services-icon fa fa-desktop" aria-hidden="true"></i>
                        <h2>${ourService.title}</h2>
                        <p>${ourService.description}</p>
                  </div>`;

    }

    DOM.innerHTML = HTML;
}

export {ourServices}