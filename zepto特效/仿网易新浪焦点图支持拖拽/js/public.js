window.onresize = r;
function r(resizeNum){
	var winW = window.innerWidth;
	document.getElementsByTagName("html")[0].style.fontSize=winW*0.15625+"px";
	if(winW>window.screen.width&&resizeNum<=10){
		setTimeout(function(){
			r(++resizeNum)
		}, 100);
	}
	else{
		document.getElementsByTagName("body")[0].style.opacity = 1;
	}
};
r(0);
setTimeout(function(){r(0)}, 100);