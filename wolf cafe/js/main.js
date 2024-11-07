/* global alert, console */


// All Variables 
var i,
	myheader = document.querySelector("header"),
	listWrapper = document.querySelector(".list-wrapper"),
	toggleButton = document.querySelector(".toggle-btn"),
	list = document.querySelector(".list"),
	lights = document.querySelector(".home-lights"),
	imgLights = document.querySelectorAll(".home-lights img"),
	fillCoffee = document.querySelector(".cup-coffee"),
	menuItems = document.querySelectorAll(".our-menus-img ul li"),
	menuOffers = document.querySelectorAll(".menu-offers"),
	inputs = document.querySelectorAll(".field"),
	password = document.querySelector(".password"),
	eye = document.querySelector(".fa-eye"),
	eyeSlash = document.querySelector(".fa-eye-slash");



window.onload = function () {
	'use strict';

	// Adjust Preloader 
	document.body.classList.add("loaded");
	document.body.style.overflow = "auto";
	
	// make scrolling smooth along the page after loading 
	document.documentElement.style.scrollBehavior = "smooth";
	
	// imglights slide down after loading 
    for (i=0; i<imgLights.length; i++) {
	    imgLights[i].style.top = 0;
    }
   
	// top button when clicked 
	fillCoffee.parentNode.addEventListener("click", function () {
		window.scroll({
			behavior: 'smooth',
			left: 0,
			top: 0
		});
	});
};



// toggle button open list when clicked
toggleButton.onclick = function () {
	'use strict';
	list.classList.toggle("open");
}

// All side menu children close it when they clicked
for (i=0; i<list.children.length; i++) {
	list.children[i].addEventListener("click", function () {
		list.classList.remove("open");
	});
}



// Our Menus change on click menuItems
for (i=0; i < menuItems.length; i++) {
	menuItems[i].addEventListener("click", function () {
		// pass active class 
		for(i=0; i < this.parentNode.children.length; i++) {
			this.parentNode.children[i].classList.remove("active");
		}
		
		this.classList.add("active");
		
		// change menu 
		for(i=0; i < menuOffers.length; i++) {
			menuOffers[i].classList.remove("offers-show");
		}
		document.querySelector("#" + this.getAttribute("data-value")).classList.add("offers-show");
	});
}



// side menu & navbar on scroll
window.onscroll = function () {
	'use strict';
	
	// navbar fixed on scroll 
	if (window.scrollY > 300) {myheader.style.opacity= 0;}
	
	if (window.scrollY > 500) {
		myheader.style.position= "fixed";
		lights.style.marginTop = "100px";
	}
	
	if (window.scrollY > 600) {myheader.style.opacity= 1;}
	
	else if (window.scrollY < 300) {
		myheader.style.position = "relative";
		lights.style.marginTop = 0;
		myheader.style.opacity= 1;
	}
	
	// menu in xs fixed on scroll 
	( window.scrollY > 90 ) ? listWrapper.style.top = "8px" : listWrapper.style.top = "20px" ;
	
	// Back top button
	if (window.scrollY > 800) {
		fillCoffee.parentNode.parentNode.style.bottom = "-18px";
	} else {
		fillCoffee.parentNode.parentNode.style.bottom = "-550px";
	}
	
	
	if(window.scrollY > document.body.scrollHeight * 0.10) {
		fillCoffee.style.height = "15%";
	}

	if(window.scrollY > document.body.scrollHeight * 0.15) {
		fillCoffee.style.height = "20%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.20) {
		fillCoffee.style.height = "25%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.25) {
		fillCoffee.style.height = "30%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.30) {
		fillCoffee.style.height = "35%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.35) {
		fillCoffee.style.height = "40%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.40) {
		fillCoffee.style.height = "45%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.45) {
		fillCoffee.style.height = "50%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.50) {
		fillCoffee.style.height = "55%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.55) {
		fillCoffee.style.height = "60%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.60) {
		fillCoffee.style.height = "65%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.65) {
		fillCoffee.style.height = "70%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.70) {
		fillCoffee.style.height = "75%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.75) {
		fillCoffee.style.height = "85%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.80) {
		fillCoffee.style.height = "90%";
	}
	
	if(window.scrollY > document.body.scrollHeight * 0.85) {
		fillCoffee.style.height = "100%";
	}
};



// *** Adjust Contact us *** //
// remove placeholder on focus
for(i=0; i<inputs.length; i++) {
	inputs[i].onfocus = function () {
		'use strict';
		 this.placeholder =" ";
	};
	
	inputs[i].onblur = function () {
		'use strict';
		this.placeholder = this.getAttribute("data-hold");
	};
}

// show and hide password
// show password 
eye.addEventListener("click", function () {
	'use strict';
	password.type = "text";
	eyeSlash.classList.add("eye-show");
	this.classList.remove("eye-show");
	password.focus();
});

// hide password 
eyeSlash.addEventListener("click", function () {
	'use strict';
	password.type = "password";
	eye.classList.add("eye-show");
	this.classList.remove("eye-show");
	password.focus();
});