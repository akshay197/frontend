// JavaScript Document
var themeButton = document.querySelector("#toggletheme");
var bodyElement = document.querySelector("body");
var logo = document.querySelector("header img");
var navbar = document.querySelector('header nav');
var mainElement = document.querySelector('main');
var topnavbar = navbar.offsetTop;
var button = document.querySelector('button');

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
	if (window.pageYOffset >= 300){
		button.classList.add('buttonappear');
	} else {button.classList.remove('buttonappear');
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

button.addEventListener('click' , function(){
window.scroll({
	top:0
})
})



