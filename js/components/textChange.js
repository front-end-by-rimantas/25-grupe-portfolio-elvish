var text = ["Elvish Walters.", "A developer."];
var element = document.getElementById('changingHeroText');
var counter = 0;
function textChange() {
    if (counter >= text.length) { counter = 0};
    element.innerHTML = text[counter];
    counter++;
    element.style.opacity = "1";
    $("#changingHeroText").fadeOut(function() {
        $(this).text("World")
      }).fadeIn();
    // var timerId = setInterval(function() {
    //     var opacity = element.style.opacity;
    //     if (opacity === 0) {
    //         clearInterval(timerId);
    //     } else {
    //         element.style.opacity = opacity - 0.05;
    //     }
    // }, 150);
}

setInterval(textChange, 5000)

// var textChange = setInterval(function() {
//     if (counter >= text.length) { counter = 0};
//     element.innerHTML = text[counter];
//     counter++;
//     element.style.opacity = "1";
//     var timerId = setInterval(function() {
//         var opacity = element.style.opacity;
//         if (opacity === 0) {
//             clearInterval(timerId);
//         } else {
//             element.style.opacity = opacity - 0.05;
//         }
//     }, 150);
// }, 5000);

export default textChange