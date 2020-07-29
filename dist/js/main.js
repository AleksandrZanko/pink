/*main-menu*/

var navToggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".site-list");
var promo = document.querySelector(".promo");
var pageHeader = document.querySelector (".page-header");

navToggle.addEventListener("click", function() {
	navToggle.classList.toggle("main-nav__toggle--open");
	menu.classList.toggle("site-list--open");
	promo.classList.toggle("promo--open");
	pageHeader.classList.toggle("page-header--open");
});

//reviews-slider desktop

let sliderItems = document.querySelectorAll('.reviews__item');
let btnPrev = document.querySelector('.reviews__prev');
let btnNext = document.querySelector('.reviews__next');
let currentSlide = document.querySelector('.reviews__item--showed');
if(currentSlide == sliderItems[0]) {
	btnPrev.disabled = true;
}

btnPrev.addEventListener("click", function(e) {
	e.preventDefault();
	let currentSlide = document.querySelector('.reviews__item--showed');

	if(currentSlide == sliderItems[0]) {
		btnPrev.disabled = true;
		return false
	} else {	
		currentSlide.classList.remove('reviews__item--showed');
		currentSlide.previousElementSibling.classList.add('reviews__item--showed');	
		btnNext.disabled = false;
	}
	currentSlide = currentSlide.previousElementSibling;
	if(currentSlide == sliderItems[0]) {
		btnPrev.disabled = true;
		return false
	}
})

btnNext.addEventListener("click", function(e) {
	e.preventDefault();
	let currentSlide = document.querySelector('.reviews__item--showed');
	if(currentSlide == sliderItems[sliderItems.length - 1]) {	
		btnNext.disabled = true;		
		return false
	} else {
		currentSlide.classList.remove('reviews__item--showed');
		currentSlide.nextElementSibling.classList.add('reviews__item--showed');
		btnPrev.disabled = false;
	}
	currentSlide = currentSlide.nextElementSibling;
	if(currentSlide == sliderItems[sliderItems.length - 1]) {	
		btnNext.disabled = true;		
		return false
	}
})


