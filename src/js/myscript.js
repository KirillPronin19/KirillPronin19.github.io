"use strict "

// import calc from '.modules/calc'

// window.addEventListener('DOMContentLoaded', () => {
// });


// 	calc('#tip', '#diz', '#adapt', '.price');





// let siteType = prompt("Тип сайта 1-Одностраничный, 2-Многостраничный, 3-Интернет-магазин");

// console.log(siteType);

// let design = prompt("Дизайн сайта 1-Ваш дизайн, 2-Индивидуальный дизан, 3-Без дизайна");

// console.log(design);

// let adaptability = prompt("Адаптивность 1-Не адаптивный, 2-Адаптивный под мобильные устройства, 3-адаптивный");

// console.log(adaptability);

// let sum = 0

// if (siteType == "1"){
// 	sum = sum + 5000;
// }

// else if (siteType == "2"){
// 	sum = sum + 7000;
// }

// else if (siteType == "3"){
// 	sum = sum + 13000;
// }

// if (design == "1"){
// 	sum = sum + 2000;
// }

// else if (design == "2"){
// 	sum = sum + 1000;
// }

// else if (design == "3"){
// 	sum = sum + 0;
// }

// if (adaptability == "1") {
// 	sum = sum + 1000;
// }

// else if (adaptability == "2"){
// 	sum = sum + 4000;
// }

// else if (adaptability == "3") {
// 	sum = sum + 3000;
// }

// alert(sum);



$(document).ready(function(){

	$('h1').click(function(){
	$(this).slideUp(500).slideDown(500);
	});

});

$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});

$(document).ready(function(){
	let options = {threshold: [0.5]};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = $('.element-animation');
	elements.each((i,el) => {
		observer.observe(el);
});

});

function onEntry (entry){
	entry.forEach(change => {
		if (change.isIntersecting){
			change.target.classList.add('show-animation');
		}
		});
}


