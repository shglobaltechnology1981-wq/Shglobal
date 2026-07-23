/*==========================================
SH GLOBAL TECHNOLOGY
JavaScript File
==========================================*/

/*============ SEARCH FUNCTION ============*/

function searchProduct() {

let input = document
.getElementById("searchBox")
.value.toUpperCase();

let cards =
document.querySelectorAll(".product-card");

cards.forEach(function(card){

let title =
card.querySelector("h3");

let text =
card.querySelector("p");

if(
title.innerText.toUpperCase().indexOf(input)>-1 ||

text.innerText.toUpperCase().indexOf(input)>-1

){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

/*============ SCROLL EFFECT ============*/

window.addEventListener("scroll",function(){

const header =
document.querySelector(".header");

if(window.scrollY>50){

header.style.background="#062b63";

}else{

header.style.background="#0b3d91";

}

});
/*============ PAGE LOAD ANIMATION ============*/

window.addEventListener("load", function(){

document.body.style.opacity = "1";

});

/*============ SMOOTH SCROLL ============*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*============ IMAGE HOVER EFFECT ============*/

const images = document.querySelectorAll(".product-card img");

images.forEach(function(img){

img.addEventListener("mouseover",function(){

this.style.transform="scale(1.05)";

this.style.transition=".3s";

});

img.addEventListener("mouseout",function(){

this.style.transform="scale(1)";

});

});

/*============ SIMPLE FADE EFFECT ============*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(function(section){

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="all .6s ease";

observer.observe(section);

});
