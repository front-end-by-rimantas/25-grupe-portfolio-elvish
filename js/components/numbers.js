

function numbers(selector, data) {
    // input validation

    // logic
    const DOM = document.querySelector(selector);
    
    // const list = data.list;
    // const imgPath = data.imgPath;
    // const maxCount = data.maxCount;

    const { list, imgPath, maxCount } = data;

    let HTML = '';
    let generatedNumbersCount = 0;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        console.log(number);

        if (!number.active) {
            continue;
        }
        
        if (generatedNumbersCount === maxCount) {
            break;
        }

        generatedNumbersCount++;
        HTML += `<div class="col-12 col-lg-3">
                        <div class="numbers">
                            <i>${number.img}</i>
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