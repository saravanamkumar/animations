var init=function(){
	var box=document.getElementById("box");
	box.addEventListener("webkitAnimationEnd",updateAnimation,false);
	box.addEventListener("oTAnimationEnd",updateAnimation,false);
	box.addEventListener("animationEnd",updateAnimation,false);
	function updateAnimation (e){
		box.style.webkitAnimationName="slidedown";
		box.style.animationName="slidedown";
		alert("the"+e.animationName+"animation has been running for"+e.elapsedTime+"s");
	}
};
window.addEventListener('DOMContentLoaded',init,false);