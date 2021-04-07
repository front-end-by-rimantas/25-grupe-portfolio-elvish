$(document).ready(textChange);
var text = ["Elvish Walters.", "A developer.", "A designer."];
var element = document.getElementById('changingHeroText');
var counter = 0;

function textChange() {
  if (counter >= text.length) { counter = 0};
  $("#changingHeroText").fadeIn(5000);
  element.innerHTML = text[counter];
  counter++;
  $("#changingHeroText").fadeOut(5000);
}

setInterval(textChange, 10000)

export default textChange