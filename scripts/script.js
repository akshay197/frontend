// JavaScript Document
var themeButton = document.querySelector("#toggletheme");
var bodyElement = document.querySelector("body");
var logo = document.querySelector("header img");
var navbar = document.querySelector('header nav');
var mainElement = document.querySelector('main');
var topnavbar = navbar.offsetTop;
var button = document.querySelector('button');
var form = document.querySelector('form');

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

window.addEventListener('scroll', function(){ // geen e erin omdat je geen variabelen gebruikt
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

form.addEventListener('submit', function(e){ // e erin omdat je variabele gebruikt
	e.preventDefault(); // als je klikt op submit, dat hij de page niet gaat refreshen
	var voornaam = form.voornaam.value;
	var achternaam = form.achternaam.value
	var reactie = form.reactie.value;

	var node = document.createElement('li'); // creeërt zelf een html element aan ~W3schools, https://www.w3schools.com/jsref/met_node_appendchild.asp
	var nodeHeader = document.createElement('h3');
	var textNodeHeader = document.createTextNode(`${voornaam} ${achternaam}`); //maakt tekstje aan dmv variabele
	var nodeReaction = document.createElement('p');
	var textNodeReaction = document.createTextNode(`${reactie}`);

	node.appendChild(nodeHeader); // maakt een child in de html aan voor een parent element
	node.appendChild(nodeReaction);
	nodeHeader.appendChild(textNodeHeader);
	document.querySelector('#reacties').appendChild(node); // zet de li in de ul
	nodeReaction.appendChild(textNodeReaction);


})



