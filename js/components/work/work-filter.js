// const allWorkSelectBtn = document.querySelector('.js-all-menu-btn');
// allWorkSelectBtn.addEventListener('click', () => filterSelection('all', allWorkSelectBtn));
// const seoWorkSelectBtn = document.querySelector('.js-seo-menu-btn');
// seoWorkSelectBtn.addEventListener('click', () => filterSelection('seo', seoWorkSelectBtn));
// const webdesignWorkSelectBtn = document.querySelector('.js-webdesign-menu-btn');
// webdesignWorkSelectBtn.addEventListener('click', () => filterSelection('webdesign', webdesignWorkSelectBtn));
// const workWorkSelectBtn = document.querySelector('.js-work-menu-btn');
// workWorkSelectBtn.addEventListener('click', () => filterSelection('workImg', workWorkSelectBtn));
// const wordpressWorkSelectBtn = document.querySelector('.js-wordpress-menu-btn');
// wordpressWorkSelectBtn.addEventListener('click', () => filterSelection('wordpress',wordpressWorkSelectBtn));

//filterSelection("all", allWorkSelectBtn)
function filterSelection(c,b) {
  var x, i;
  x = document.getElementsByClassName("work-img");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
      let element =  x[i];
      element.classList.remove("visible");
    if (x[i].className.indexOf(c) > -1) element.classList.add("visible");    
  }
  selectedMenuItem(b);
}

function selectedMenuItem(workbtn){
    var x, i;
  x = document.getElementsByClassName("work-menu-button");
  for (i = 0; i < x.length; i++) {
    let element =  x[i];
    element.classList.remove("selected");
  }
    workbtn.classList.add("selected");
}

export default filterSelection
