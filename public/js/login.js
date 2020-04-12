$(document).ready(function () {
	"use strict";
	// toat popup js
	$.toast({
		heading: 'Welcome!',
		text: 'Use username is "admin" and password is "123456789" to login.',
		position: 'top-right',
		loaderBg: '#fff',
		icon: 'warning',
		hideAfter: 6000,
		stack: 6
	})
});


const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
