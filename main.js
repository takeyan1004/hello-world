(function(){
"use strict";

var comment = document.getElementById('comment');
var label = document.getElementById('label');

var LIMIT = 20;
var WARNING = 10;
var stop = 0;

label.innerHTML = LIMIT;

comment.addEventListener("keyup", function(){
var remaining = LIMIT - this.value.length;
label.innerHTML = remaining;
if(remaining<WARNING){
label.className = "warning";
}else{
	label.className = "";
}
if(stop>remaining){
	label.innerHTML = 0;
	comment.value = comment.value.substring(0, LIMIT);
	alert("Please stop typing!")
}
});
})();