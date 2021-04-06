function skills(selector1,selector2, data) {
    // input validation

    // logic
    const DOM1 = document.querySelector(selector1);
    const { name, percent } = data;

    let HTML1 = '';

    for (let i = 0; i < 3; i++) {
        const skill = data[i];

        HTML1 += `<div class="progress_area">
            <div class="progress_text">${skill.name}</div>
            <div class="progress_percent">${skill.percent}</div>
            <div class="progress_bar">
            <div class="progress_inner" role="progressbar" style="width: ${skill.percent}"></div>
            </div>
         </div>`;
    }

    // post logic validation

    // result return
    DOM1.innerHTML = HTML1;
    let HTML2 = '';
    const DOM2 = document.querySelector(selector2);
    for (let i = 3; i < 6; i++) {
        const skill = data[i];

        HTML2 += `<div class="progress_area">
            <div class="progress_text">${skill.name}</div>
            <div class="progress_percent">${skill.percent}</div>
            <div class="progress_bar">
            <div class="progress_inner" role="progressbar" style="width: ${skill.percent}"></div>
            </div>
         </div>`;
         
         
    }
    // post logic validation

    // result return
    DOM2.innerHTML = HTML2;
}

let scrolFunExec=false;
function fillPorgress(data){
    var elem = document.querySelector('.progress_area');
    if(!checkVisible(elem)) return;
    if(scrolFunExec) return;
    scrolFunExec = true;
    const progArr = document.getElementsByClassName('progress_inner');
    let element;
    for(let p = 0; p < progArr.length; p++){
        element = progArr[p];
        element.animate([
            {width: 0 },
            {width: data[p].percent}
        ], {
            duration: 1000, 
            easing: "ease-in-out"
        }
        );
        
        element.style.width = data[p].percent;
    }
}
function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

export {fillPorgress, skills}

