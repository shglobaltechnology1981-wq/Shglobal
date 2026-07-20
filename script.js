let allProducts = [];


// Load Product Data
fetch("products.json")
.then(response => response.json())
.then(products => {

    allProducts = products;

    displayProducts(products);

})
.catch(error => {

    console.log(error);

    document.getElementById("product-list").innerHTML =
    "Product loading failed.";

});


// Display Product
function displayProducts(products){

let productList = document.getElementById("product-list");

productList.innerHTML = "";


if(products.length === 0){

productList.innerHTML =
"<h3>No Product Found</h3>";

return;

}


products.forEach(product => {


productList.innerHTML += `

<div class="product-card">


<img src="${product.image}"
alt="${product.name}"
onerror="this.src='logo.png'">


<h3>${product.name}</h3>


<p>
${product.description}
</p>


<h4>
${product.price}
</h4>


<a class="whatsapp-btn"
href="https://wa.me/8801621007916?text=I%20need%20${product.name}"
target="_blank">

💬 Inquiry

</a>


</div>

`;


});


}



// Search Function

document.getElementById("searchBox")
.addEventListener("keyup", function(){


let searchText =
this.value.toLowerCase();


filterProducts(searchText);


});



// Brand Filter

document.getElementById("brandFilter")
.addEventListener("change", function(){


filterProducts(
document.getElementById("searchBox").value.toLowerCase()
);


});




// Filter

function filterProducts(searchText){


let brand =
document.getElementById("brandFilter").value;



let filtered =
allProducts.filter(product => {


let name =
product.name.toLowerCase();


let productBrand =
product.brand || "";



let searchMatch =
name.includes(searchText);



let brandMatch =
brand === "all" ||
productBrand === brand;



return searchMatch && brandMatch;


});



displayProducts(filtered);


}
