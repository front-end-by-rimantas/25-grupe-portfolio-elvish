import { isValidSkills } from './isValidSkills.js'
import { isValidSkill } from './isValidSkill.js'

function skills(selector1,selector2, data) {
    // input validation
    if (!isValidSkills(selector1, selector2, data)) {
        return false;
    }
    
    const DOM1 = document.querySelector(selector1);
    const DOM2 = document.querySelector(selector2);
    if (!DOM1 || !DOM2) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas.');
        return false;
    }

    const { name, percent } = data;

    let HTML1 = '';
    let HTML2 = '';
    let dataSplit=groupByN(data.length/2, data);
    
    for (let j = 0; j < 2; j++){
    for (let i = 0; i < dataSplit[j].length; i++) {
        const skill = dataSplit[j][i];
        if(!isValidSkill(skill)) continue;
        if(j === 0){
        HTML1 += `<div class="progress_area">
            <div class="progress_text">${skill.name}</div>
            <div class="progress_percent">${skill.percent}</div>
            <div class="progress_bar">
            <div class="progress_inner" role="progressbar" style="width: ${skill.percent}"></div>
            </div>
            </div>`;
        }
        if(j === 1)  {  
            HTML2 += `<div class="progress_area">
            <div class="progress_text">${skill.name}</div>
            <div class="progress_percent">${skill.percent}</div>
            <div class="progress_bar">
            <div class="progress_inner" role="progressbar" style="width: ${skill.percent}"></div>
            </div>
            </div>`; 
    }}
}
    DOM1.innerHTML = HTML1;
    DOM2.innerHTML = HTML2;
}

// Splits data into n arrays
let groupByN = (n, data) => {
    let result = [];
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
    return result;
  };
  
// Fills progress bars on first scroll
let scrolFunExec=false;
function fillPorgress(data){
    const elem = document.querySelector('.progress_area');
    if(!checkVisible(elem)) return;
    if(scrolFunExec) return;
    scrolFunExec = true;
    const progArr = document.getElementsByClassName('progress_inner');
    let element, num;
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
        num = parseInt(data[p].percent);
        counter(p, num);
    }
}

// Checking if element is visible
function checkVisible(elm) {
    const rect = elm.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

// number counter
function counter(i, targetNum){
    let tick = 0;
    let count = 0; 
    const numberDOM = document.querySelectorAll('.progress_percent')[i];
    const animationDuration = 1;
    const animationFPS = 30;
    const totalTickCount = animationFPS * animationDuration;

    const timer = setInterval(() => {
        count = Math.floor(tick / totalTickCount * targetNum);
        tick++;
        numberDOM.innerText = count + '%';
        if (targetNum === count){
            clearInterval(timer);
        }
    }, 1000 / animationFPS)


}

export {fillPorgress, skills}

