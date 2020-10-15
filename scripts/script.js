// JavaScript Document
var themeButton = document.querySelector("#toggletheme");
var bodyElement = document.querySelector("body");
var logo = document.querySelector("header img");
var navbar = document.querySelector('header nav');
var mainElement = document.querySelector('main');
var topnavbar = navbar.offsetTop;

themeButton.addEventListener("click", function(currentTheme){
	currentTheme = bodyElement.getAttribute("data-theme");
	localStorage.setItem('theme', currentTheme);

	if (currentTheme === "light"){
		bodyElement.setAttribute("data-theme", "dark");
		logo.classList.add("logoBorder");
	}
	else{
		bodyElement.setAttribute("data-theme", "light");
		logo.classList.remove("logoBorder");
	}
});

window.addEventListener('scroll', function(){
	if (window.pageYOffset >= topnavbar) {
		navbar.classList.add('fixedNavbar')
		mainElement.classList.add('mainMargin');
	} else {
		navbar.classList.remove('fixedNavbar')
		mainElement.classList.remove('mainMargin');
	}
})

document.addEventListener('DOMContentLoaded', function(localTheme){
	localTheme = localStorage.getItem('theme');	

	if (localTheme === "light"){
		bodyElement.setAttribute("data-theme", "dark");
		logo.classList.add("logoBorder");
	}
	else{
		bodyElement.setAttribute("data-theme", "light");
		logo.classList.remove("logoBorder");
	}
})
