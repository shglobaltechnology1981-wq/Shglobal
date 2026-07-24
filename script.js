/*==========================================
SH GLOBAL TECHNOLOGY
Professional Website JavaScript
==========================================*/

/*================ AUTO LOAD PRODUCTS ================*/

const productContainer = document.getElementById("product-container");

if (productContainer) {

fetch("products.json")

.then(response => response.json())

.then(products => {

productContainer.innerHTML = "";

products.forEach(product => {

productContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.description}</p>

<a href="tel:${product.call}" class="call-btn">

📞 Call

</a>

<a href="https://wa.me/${product.whatsapp.replace("+","")}"

target="_blank"

class="whatsapp-btn">

WhatsApp

</a>

</div>

`;

});

})

.catch(error => console.log(error));

}

/*================ SEARCH PRODUCT ================*/

function searchProduct(){

const input =
document.getElementById("searchBox")
.value
.toUpperCase();

const cards =
document.querySelectorAll(".product-card");

cards.forEach(card=>{

const text =
card.innerText.toUpperCase();

card.style.display =
text.includes(input)
? "block"
: "none";

});

}
/*================ AUTO GALLERY ================*/

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

.catch(error => console.log(error));

}

/*================ IMAGE HOVER EFFECT ================*/

document.addEventListener("mouseover",function(e){

if(e.target.matches(".product-card img")){

e.target.style.transform="scale(1.05)";

e.target.style.transition=".3s";

}

});

document.addEventListener("mouseout",function(e){

if(e.target.matches(".product-card img")){

e.target.style.transform="scale(1)";

}

});

/*================ BRAND FILTER ================*/

function filterProducts(){

const brand =
document.getElementById("brandFilter").value;

const category =
document.getElementById("categoryFilter").value;

const cards =
document.querySelectorAll(".product-card");

cards.forEach(card=>{

const text = card.innerText.toUpperCase();

const brandOk =
brand === "All" ||
text.includes(brand.toUpperCase());

const categoryOk =
category === "All" ||
text.includes(category.toUpperCase());

card.style.display =
(brandOk && categoryOk)
? "block"
: "none";

});

}

/*================ HEADER SCROLL EFFECT ================*/

window.addEventListener("scroll",function(){

const header=document.querySelector(".header");

if(header){

if(window.scrollY>50){

header.style.background="#062b63";

}else{

header.style.background="#0b3d91";

}

}

});

/*================ PAGE LOAD ANIMATION ================*/

window.addEventListener("load",function(){

document.body.style.opacity="1";

});

/*================ FADE ANIMATION ================*/

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="all .6s ease";

observer.observe(section);

});

/*================ BACK TO TOP ================*/

const backToTop=document.createElement("button");

backToTop.id="backToTop";

backToTop.innerHTML="↑";

document.body.appendChild(backToTop);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

backToTop.style.display="block";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*================ CURRENT YEAR FOOTER ================*/

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=

"© "+new Date().getFullYear()+

" SH Global Technology<br>Industrial Sewing Machines & Genuine Spare Parts<br>All Rights Reserved.";

}

/*================ CONSOLE ================*/

console.log("SH Global Technology Loaded Successfully");

/*================ END OF SCRIPT ================*/
