const example = ['Elvish Walters.', 'A developer.', 'A designer.'];
const div = document.getElementById('changingHeroText');
let i = 0;

function textChange() {};

setInterval(function textChange() {
  div.innerHTML = `<span>${example[i++ % example.length]}</span>`
}, 8000)

export default textChange