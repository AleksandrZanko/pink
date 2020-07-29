/*main-menu*/

var navToggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".site-list");
var pageTitle = document.querySelector(".page-title");
var pageHeader = document.querySelector (".page-header");

navToggle.addEventListener("click", function() {
	navToggle.classList.toggle("main-nav__toggle--open");
	menu.classList.toggle("site-list--open");
	pageTitle.classList.toggle("page-title--open");
	pageHeader.classList.toggle("page-header--open");
});