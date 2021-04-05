const allWorkSelectBtn = document.querySelector('.js-all-menu-btn');
allWorkSelectBtn.addEventListener('click', () => filterSelection('all'));
const seoWorkSelectBtn = document.querySelector('.js-seo-menu-btn');
seoWorkSelectBtn.addEventListener('click', () => filterSelection('seo'));
const webdesignWorkSelectBtn = document.querySelector('.js-webdesign-menu-btn');
webdesignWorkSelectBtn.addEventListener('click', () => filterSelection('webdesign'));
const workWorkSelectBtn = document.querySelector('.js-work-menu-btn');
workWorkSelectBtn.addEventListener('click', () => filterSelection('workImg'));
const wordpressWorkSelectBtn = document.querySelector('.js-wordpress-menu-btn');
wordpressWorkSelectBtn.addEventListener('click', () => filterSelection('wordpress'));


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("work-img");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
      let element =  x[i];
      element.classList.remove("visible");
    if (x[i].className.indexOf(c) > -1) element.classList.add("visible");    
  }
}


export default filterSelection
