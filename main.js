// import Swup from 'swup';
// const swup = new Swup(); // only this line when included with script tag

var swup = new Swup({
    animationSelector: '[class*="swup-transition-"]'
  });




// Rotate icon - Bootstrap
let rotateBtn = document.getElementsByClassName("rotate-icon")
$("#myButton").click(function(e) {
    $(this).addClass("rotate-animation");
});