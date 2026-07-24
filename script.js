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
/*==========================================
BACK TO TOP BUTTON
==========================================*/

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.right = "20px";
backToTop.style.bottom = "160px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#0b3d91";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "22px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";

window.addEventListener("scroll", function () {

if (window.scrollY > 300) {

backToTop.style.display = "block";

} else {

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click", function () {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

/*==========================================
CURRENT YEAR FOOTER
==========================================*/

const footer = document.querySelector("footer p");

if (footer) {

footer.innerHTML =
"© " + new Date().getFullYear() +
" SH Global Technology<br>All Rights Reserved.";

}
// =================== AUTO GALLERY ===================

const galleryContainer = document.getElementById("gallery-container");

if (galleryContainer) {
    fetch("products.json")
        .then(response => response.json())
        .then(products => {

            galleryContainer.innerHTML = "";

            products.forEach(product => {

                galleryContainer.innerHTML += `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                    </div>
                `;

            });

        })
        .catch(error => {
            console.log(error);
        });
}
/*==========================================
CONSOLE MESSAGE
==========================================*/

console.log("SH Global Technology Website Loaded Successfully");

/*==========================================
END OF SCRIPT.JS
==========================================*/
