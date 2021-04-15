class OurWork {
    constructor(selector, data){
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selectorius');
            return false;
        }

        if (!this.isValidData()) {
            console.error('ERROR: nevalidus duomenys');
            return false;
        }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: pagal pateikta selector nepavyko rasti norimos vietos/elemento');
            return false;
        }
        this.DOM = DOM;

        this.render();
        this.addEvents();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('ERROR: selector turi buti tekstas');
            return false;
        }

        if (this.selector === '') {
            console.warn('ERROR: selector turi buti ne tuscias tekstas');
            return false;
        }

        return true;
    }

    isValidData() {
        // if (typeof this.data !== 'object' ||
        //     Array.isArray(this.data)) {
        //     console.warn('ERROR: duomenys turi buti objekto tipo');
        //     return false;
        // }

        // if (this.data.list === undefined ||
        //     !Array.isArray(this.data.list)) {
        //     console.warn('ERROR: duomenyse esantis list turi buti array tipo');
        //     return false;
        // }

        // if (this.data.list.length === 0) {
        //     console.warn('ERROR: duomenyse esantis list turi buti ne tuscias array');
        //     return false;
        // }

        return true;
    }

    render() {
        let HTML = `<div class="row center">
                    <div class="col-12 work-menu">`;

        for (const item of this.data.categories) {
            HTML += `<div class="work-m-b"><div class="js-${item}-menu-btn work-menu-button st-aft">${item}</div></div>`;
        }
        HTML += `</div></div>`;

        HTML += `<div class="row img-row">`;
        for (const item of this.data.list) {
            HTML += `<img src="${this.data.imgPath + item.img}" alt="${item.name}" class="col-12 col-lg-4 col-xxl- work-img ${item.categories}">`;
            console.log(this.data.imgPath + item.img);
        }
        HTML += `</div>`;
        
        this.DOM.insertAdjacentHTML("beforeend", HTML);
    }

    addEvents() {}


}

export { OurWork }