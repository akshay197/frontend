// JavaScript Document;
var themeButton = document.querySelector("#toggletheme");
var bodyElement = document.querySelector("body");
var logo = document.querySelector("header img");
var navbar = document.querySelector('header nav');
var topnavbar = navbar.offsetTop;

themeButton.addEventListener("click", function(){
	var currentTheme = bodyElement.getAttribute("data-theme");
	if (currentTheme === "light"){
		bodyElement.setAttribute("data-theme", "dark");
		logo.classList.add("logoBorder");
	}
	else{
		bodyElement.setAttribute("data-theme", "light");
		logo.classList.remove("logoBorder");
	}
});

window.addEventListener("scroll", function(){
	if (window.pageYOffset >= topnavbar){
	navbar.classList.add("fixedNavbar") 
	}
	else{
	navbar.classList.remove("fixedNavbar")
	}
})

