(function(){	
	document.getElementById("myBox").addEventListener("click", function(){
		console.log("Click element");
		var boxValue = document.getElementById("clickCount").innerHTML;
		boxValue = parseInt(boxValue) + 1;			
		document.getElementById("clickCount").innerHTML = boxValue;
	});
}());
