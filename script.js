let allProducts = [];

// Load Products
fetch("products.json")
.then(response => response.json())
.then(data => {
    allProducts = data;
    displayProducts(allProducts);
})
.catch(error => {
    document.getElementById("product-list").innerHTML =
    "<h3>Products not found.</h3>";
});

// Display Products
function displayProducts(products){

    let output = "";

    products.forEach(product => {

        output += `
        <div class="product-card">

            <img src="${product.image}"
                 alt="${product.name}"
                 onerror="this.src='logo.png'">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <h4>${product.price}</h4>

            <a class="btn"
            href="https://wa.me/8801621007916?text=${encodeURIComponent('I need ' + product.name)}"

            WhatsApp Inquiry

            </a>

        </div>
        `;
    });

    document.getElementById("product-list").innerHTML = output;
}

// Search
document.getElementById("searchBox").addEventListener("keyup", function(){

    filterProducts();

});

// Brand Filter
document.getElementById("brandFilter").addEventListener("change", function(){

    filterProducts();

});

function filterProducts(){

    let search =
    document.getElementById("searchBox").value.toLowerCase();

    let brand =
    document.getElementById("brandFilter").value;

    let filtered = allProducts.filter(product => {

        let matchName =
        product.name.toLowerCase().includes(search);

        let matchBrand =
        brand === "all" || product.brand === brand;

        return matchName && matchBrand;

    });

    displayProducts(filtered);

}
