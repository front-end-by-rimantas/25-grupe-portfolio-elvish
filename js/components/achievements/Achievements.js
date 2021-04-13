/*
patikrinti ar validus this.selector?
patikrinti ar validus this.data?
patikrinti ar pagal nurodyta this.selector egzistuoja elementas/vieta?

generuoti HTML
    - tikrinti ar kiekvienas this.data.list[i] yra validus istatyti i nurodyta vieta

pradeti stebeti scroll ivyki (event)
        - jeigu turinys tampa matomas ekrane
            - inicijuoti skaiciu count-up (nuo 0 iki nurodytos reiksmes)
            - uztikrinti, jog tai nutiktu tik 1 karta
*/

class Achievements{
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
        console.error('ERROR: nevalidus SELEKTORIUS');
        return false;
        }

        if (!this.isValidData()) {
            console.error('ERROR: nevalidus DUOMENYS');
            return false;
        }

        const DOM = document.querySelector(this.selector)
        if (!DOM) {
            console.error('Pagal pateikta selektoriu nerastas norimas elementas'); 
            return false
        }
        this.DOM = DOM;

        this.render();
        this.addEvents();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('ERROR: selector turi buti TEKSTAS');
        }

        if (this.selector === '') {
            console.warn('ERROR: selector turi buti NE TUSCIAS TEKSTAS');
        }

        return true;
    }

    isValidData() {
        if (typeof this.data !== 'object' ||
        Array.isArray(this.data)) {
            console.warn('ERROR: duomenys turi buti objekto tipo');
            return false;
        }

        if (this.data.list === undefined ||
            !Array.isArray(this.data.list)) {
            console.warn('ERROR: duomenyse esantis list turi buti array tipo');
            return false;
        }
        if (this.data.list.length === 0) {
            console.warn('ERROR: duomenyse esantis list turi buti ne tuscias array');
            return false;
        }

        return true;
    }
    
    render() {
        let HTML = '';

        for (const item of this.data.list) {
            HTML += `<div class="numbers achievement col-12 col-lg-3">
                            <i class="num-icon fa fa-${item.icon}" aria-hidden="true"></i>
                            <h1 class="counter main_headings">0</h1>
                            <p class="num-parag">${item.subtitle}</p>
                        </div>`;
        }

        this.DOM.innerHTML = HTML;
    }

    addEvents() {
        addEventListener('scroll', () => {
            const allNumbersDOM = this.DOM.querySelectorAll('.counter');
            
            for (let i = 0; i < allNumbersDOM.length; i++) {
                const numberDOM = allNumbersDOM[i];
                const elementTop = allNumbersDOM[0].offsetTop;
                const elementHeight = allNumbersDOM[0].clientHeight;
    
                const isVisible = scrollY + innerHeight >= elementTop + elementHeight;
                if (isVisible) {
                    this.animateNumber(numberDOM, i);

                }
            }
        })
    }
    animateNumber(elementDOM, elementIndex) {
        // ar element.animated === true
        // priesingu atveju - animuoju ir pazymiu, jog jau suanimuotas
        if (this.data.list[elementIndex].animated !== true) {

            const targetNumber = this.data.list[elementIndex].value;
            this.data.list[elementIndex].animated = true;
            
            const timeToAnimate = 2;                           // s
            const fps = 30;                                    // kartai per sekunde
            const framesCount = timeToAnimate * fps;           // kiek is viso bus kadru
            const numberIncrament = targetNumber / framesCount;
            let printedValue = 0;
            let currentFrameIndex = 0;

            //setTimeout(func, time to wait in ms)
            const timer = setInterval(() => {
                printedValue += numberIncrament;
                currentFrameIndex++;
                elementDOM.innerText = Math.round(printedValue);

                if (currentFrameIndex === framesCount) {
                    clearInterval(timer)
                }
            }, 1000 / fps)
        }
    }
}

export { Achievements };