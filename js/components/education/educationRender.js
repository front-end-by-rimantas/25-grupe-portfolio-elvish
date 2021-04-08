function educationRender(selector, educData, experData) {
    const DOM = document.querySelector(selector);
    let educationHTML = ''
    for (let i = 0; i < educData.length; i++) {
        const item = educData[i];
        educationHTML += `<div class="experience">
                    <h3>${item.duration}</h3>
                    <h3>${item.studies}</h3>
                    <p>${item.description}</p>
                </div>`;       
    }
    let experienceHTML = ''
    for (let i = 0; i < experData.length; i++) {
        const item = experData[i];
        experienceHTML += `<div class="experience">
                    <h3>${item.duration}</h3>
                    <h3>${item.studies}</h3>
                    <p>${item.description}</p>
                </div>`;       
    }
    DOM.innerHTML = `<div class="col-12 col-lg-5 ml-lg-1 experience-column">${educationHTML}</div>` + `<div class="col-12 col-lg-5 ml-lg-1 experience-column">${experienceHTML}</div>`;
}

export { educationRender }