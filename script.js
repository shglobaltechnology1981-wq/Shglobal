let allProducts = [];


// Load Product Data

fetch("products.json")

.then(response => response.json())

.then(data => {

    allProducts = data;

    displayProducts(allProducts);

})

.catch(error => {

    console.log(error);

    document.getElementById("product-list").innerHTML =
    "Product loading failed.";

});




// Display Product

function displayProducts(products){


let productList = document.getElementById("product-list");


if(!productList) return;


productList.innerHTML = "";



products.forEach(product => {


productList.innerHTML += `

<div class="product-box">


<img src="${product.image}" 
alt="${product.name}"
onerror="this.src='images/logo.png'">


<h3>${product.name}</h3>


<p><b>Brand:</b> ${product.brand}</p>


<p>${product.description}</p>


<p>
<b>Specification:</b><br>
${product.specification}
</p>


<h4>
${product.price}
</h4>


<a class="whatsapp"
href="https://wa.me/8801XXXXXXXXX?text=I need quotation for ${product.name}">

WhatsApp Order

</a>


</div>

`;

});


}




// Search Function

let searchBox = document.getElementById("searchBox");


if(searchBox){


searchBox.addEventListener("keyup", function(){


let value = this.value.toLowerCase();



let filtered = allProducts.filter(product =>

product.name.toLowerCase().includes(value) ||

product.brand.toLowerCase().includes(value)

);



displayProducts(filtered);



});


}





// Brand Filter


let brandFilter = document.getElementById("brandFilter");


if(brandFilter){


brandFilter.addEventListener("change", function(){



let brand = this.value;



if(brand === "all"){


displayProducts(allProducts);


}

else{


let filtered = allProducts.filter(product =>

product.brand === brand

);


displayProducts(filtered);


}



});


}
