var init = function() {
var square = document.getElementById('square');
var play = document.getElementById('play');
var pause = document.getElementById('pause');
document.getElementById('play').addEventListener(
'click', function(){
square.style.webkitAnimationPlayState = "running";
square.style.animationPlayState = "running";
}, false);
document.getElementById('pause').addEventListener(
'click', function(){
square.style.webkitAnimationPlayState = "paused";
square.style.animationPlayState = "paused";
}, false);
};
window.addEventListener('DOMContentLoaded', init, false);
