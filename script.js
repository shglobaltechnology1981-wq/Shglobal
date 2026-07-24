/*==========================================
SH GLOBAL TECHNOLOGY
Professional Website JavaScript
PART-3A
==========================================*/

/*========== AUTO LOAD PRODUCTS ==========*/

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

<p><strong>Brand:</strong> ${product.brand}</p>

<p><strong>Category:</strong> ${product.category}</p>

<p>${product.description}</p>

<div class="product-buttons">

<a href="tel:${product.call || '+8801621007917'}" class="call-btn">
📞 Call
</a>

<a href="https://wa.me/${(product.whatsapp || '+8801621007916').replace('+','')}"
target="_blank"
class="whatsapp-btn">
WhatsApp
</a>

</div>

</div>

`;

});

})
.catch(error => {

console.error("Products Load Error:", error);

});

}
/*==========================================
PART-3B
SEARCH + BRAND + CATEGORY FILTER
==========================================*/

function filterProducts() {

const search =
document.getElementById("searchBox")
? document.getElementById("searchBox").value.toUpperCase()
: "";

const brand =
document.getElementById("brandFilter")
? document.getElementById("brandFilter").value.toUpperCase()
: "ALL";

const category =
document.getElementById("categoryFilter")
? document.getElementById("categoryFilter").value.toUpperCase()
: "ALL";

const cards =
document.querySelectorAll(".product-card");

cards.forEach(card => {

const text =
card.innerText.toUpperCase();

const searchMatch =
text.includes(search);

const brandMatch =
brand === "ALL" ||
text.includes(brand);

const categoryMatch =
category === "ALL" ||
text.includes(category);

if (searchMatch && brandMatch && categoryMatch) {

card.style.display = "block";

} else {

card.style.display = "none";

}

});

}

/*========== LIVE SEARCH ==========*/

function searchProduct(){

filterProducts();

}
/*==========================================
PART-3C
GALLERY + VIEW DETAILS + IMAGE HOVER
==========================================*/

/*========== GALLERY ==========*/

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

<p><strong>Brand:</strong> ${product.brand}</p>

<p><strong>Category:</strong> ${product.category}</p>

<p>${product.description}</p>

<button class="details-btn"
onclick="showDetails(
'${product.name}',
'${product.brand}',
'${product.category}',
'${product.description}'
)">
View Details
</button>

</div>

`;

});

})
.catch(error => console.log(error));

}

/*========== VIEW DETAILS ==========*/

function showDetails(name, brand, category, description){

alert(
"Product : " + name +
"\nBrand : " + brand +
"\nCategory : " + category +
"\n\n" + description
);

}

/*========== IMAGE HOVER ==========*/

document.addEventListener("mouseover", function(e){

if(e.target.matches(".product-card img")){

e.target.style.transform = "scale(1.05)";
e.target.style.transition = "0.3s";

}

});

document.addEventListener("mouseout", function(e){

if(e.target.matches(".product-card img")){

e.target.style.transform = "scale(1)";

}

});
/*==========================================
PART-3D
FINAL EFFECTS
==========================================*/

/*========== HEADER SCROLL ==========*/

window.addEventListener("scroll", function () {

const header = document.querySelector(".header");

if (!header) return;

if (window.scrollY > 50) {

header.style.background = "#062b63";

} else {

header.style.background = "#0b3d91";

}

});


/*========== PAGE LOAD ==========*/

window.addEventListener("load", function () {

document.body.style.opacity = "1";

});


/*========== FADE ANIMATION ==========*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(40px)";
section.style.transition = "all .6s ease";

observer.observe(section);

});


/*========== BACK TO TOP ==========*/

const backToTop = document.createElement("button");

backToTop.id = "backToTop";
backToTop.innerHTML = "↑";

document.body.appendChild(backToTop);

backToTop.style.display = "none";

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


/*========== FOOTER YEAR ==========*/

const footer = document.querySelector("footer p");

if (footer) {

footer.innerHTML =
`© ${new Date().getFullYear()} SH Global Technology<br>
Industrial Sewing Machines & Genuine Spare Parts<br>
All Rights Reserved.`;

}
/*==========================================
PART-4B
PRODUCT DETAILS MODAL
==========================================*/

function showDetails(name, brand, category, description, image, call, whatsapp){

document.getElementById("modalName").innerText = name;

document.getElementById("modalBrand").innerText = brand;

document.getElementById("modalCategory").innerText = category;

document.getElementById("modalDescription").innerText = description;

document.getElementById("modalImage").src = image;

document.getElementById("modalCall").href =
"tel:" + (call || "+8801621007917");

document.getElementById("modalWhatsapp").href =
"https://wa.me/" + (whatsapp || "+8801621007916").replace("+","");

document.getElementById("productModal").style.display = "flex";

}

/*========== CLOSE MODAL ==========*/

function closeModal(){

document.getElementById("productModal").style.display = "none";

}

/*========== CLICK OUTSIDE TO CLOSE ==========*/

window.addEventListener("click", function(event){

const modal = document.getElementById("productModal");

if(event.target === modal){

modal.style.display = "none";

}

});
/*==========================================
PART-4E
MODAL EXTRA FEATURES
==========================================*/

/*========== BODY LOCK ==========*/

const modal = document.getElementById("productModal");

if(modal){

const observer = new MutationObserver(function(){

if(modal.style.display === "flex"){

document.body.classList.add("modal-open");

}else{

document.body.classList.remove("modal-open");

}

});

observer.observe(modal,{
attributes:true,
attributeFilter:["style"]
});

}

/*========== IMAGE CLICK TO OPEN ==========*/

document.addEventListener("click",function(e){

if(e.target.matches(".product-card img")){

e.target.click();

}

});

/*========== ENTER KEY SUPPORT ==========*/

document.addEventListener("keydown",function(e){

if(e.key==="Enter"){

const btn=document.querySelector(".details-btn");

if(btn){

btn.click();

}

}

});
/*==========================================
PART-4F
SHARE & COPY PRODUCT
==========================================*/

/*========== SHARE PRODUCT ==========*/

function shareProduct(name){

if(navigator.share){

navigator.share({

title:name,
text:"Check this product from SH Global Technology",
url:window.location.href

});

}else{

alert("Share is not supported on this device.");

}

}

/*========== COPY PRODUCT NAME ==========*/

function copyProduct(name){

navigator.clipboard.writeText(name);

alert("Copied : " + name);

}

/*========== CONSOLE ==========*/

console.log("SH Global Technology Loaded Successfully");

/*========== END OF SCRIPT ==========*/
