window.onload = function(){
	var oMain = document.getElementById("main");
	var oBox = document.getElementById("box");
	// oBox.onmousedown = function () {
	// 	var W = oBox.offsetWidth/2;
	// 	document.onmousemove = function(){
	// 		var event = event || window.event;
	// 		oBox.style.top = event.clientY - W + "px";
	// 		oBox.style.left = event.clientX - W + "px";
	// 	}
	// }
	// oBox.onmouseup = function(){
	// 	document.onmousemove = null;
	// }
	oBox.onmousedown = function(){
		var event = event || window.event;
		var oLeft = oBox.offsetLeft;
		var oTop = oBox.offsetTop;
		var MaxTop = oMain.clientHeight - oBox.offsetHeight;
		var MaxLeft = oMain.clientWidth - oBox.offsetWidth;
		var startX = event.clientX;
		var startY = event.clientY;
		document.onmousemove = function(){
			var event = event || window.event;
			var moveL = event.clientX - startX + oLeft;
			var moveT = event.clientY - startY + oTop;
			if(moveL <= 0){
				moveL = 0;
			}
			if(moveL >= MaxLeft){
				moveL = MaxLeft;
			}
			if(moveT <= 0){
				moveT = 0;
			}
			if(moveT >= MaxTop){
				moveT = MaxTop;
			}
			oBox.style.top = moveT + "px";
			oBox.style.left = moveL + "px";
		}
	}
	oBox.onmouseup = function(){
		document.onmousemove = null;
	}
}