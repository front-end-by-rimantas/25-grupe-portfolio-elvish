import { isValidNumbers } from './pogress/isValidNumbers.js';

function numbers(selector, data) {
    // input validation
    if (!isValidNumbers(selector, data)) {
        return false;
    }
    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas'); 
        return false
    }
    
    // const list = data.list;
    // const imgPath = data.imgPath;
    // const maxCount = data.maxCount;

    const { list, imgPath, maxCount } = data;

    let HTML = '';
    let generatedNumbersCount = 0;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        // console.log(number);

        if (!number.active) {
            continue;
        }
        
        if (generatedNumbersCount === maxCount) {
            break;
        }

        generatedNumbersCount++;
        HTML += `<div class="col-12 col-lg-3">
                        <div class="numbers">
                            <i class="num-icon fa fa-${number.icon}" aria-hidden="true"></i>
                            <h1 class="counter main_headings">${number.value}</h1>
                            <p class="num-parag">${number.subtitle}</p>
                        </div>
                    </div>`;
        
    }

    
    // post logic validation

    // result return
    DOM.innerHTML = HTML;
}

export {numbers}