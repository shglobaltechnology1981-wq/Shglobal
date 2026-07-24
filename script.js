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
