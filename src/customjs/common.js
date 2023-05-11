import $, { ready } from "jquery";
$(document).ready(function () {
	const $header = document.querySelector(".header");

	let scTop = 0;
	window.addEventListener('scroll', function(){
		scTop = window.scrollY;
		if (scTop == 0) {
      $header.classList.add("on");
    } else {
      $header.classList.remove("on");
    }
	});
})
	
