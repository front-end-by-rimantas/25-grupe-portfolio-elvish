

function numbers(selector, data) {
    // input validation

    // logic
    const DOM = document.querySelector(selector);
    
    const numbersArray = data.list;
    const imgPath = data.imgPath;

    let HTML = '';

    for (let i = 0; i < numbersArray.length; i++) {
        const number = numbersArray[i];
        console.log(number);

        if (!number.active) {
            continue;
        }

        HTML += `<div class="col-12 col-lg-3">
                        <div class="numbers">
                            <i class="num-icon fa fa-history" aria-hidden="true"></i>
                            <h1>${number.description}</h1>
                            <p>${number.title}</p>
                        </div>
                    </div>`;
        
    }




    
    
    // post logic validation

    // result return
    DOM.innerHTML = HTML;
}

export {numbers}