function generateQuotation(){


let customer =
document.getElementById("customerName").value;


let company =
document.getElementById("companyName").value;


let mobile =
document.getElementById("mobile").value;


let productData =
document.getElementById("product").value;


let qty =
document.getElementById("qty").value;



let data = productData.split("|");


let product = data[0];

let price = Number(data[1]);


let total = price * qty;



document.getElementById("quotationResult").innerHTML = `


<h2>SH Global Technology</h2>

<hr>


Customer Name:
${customer}

<br>

Company:
${company}

<br>

Mobile:
${mobile}

<br><br>


Product:
${product}

<br>

Quantity:
${qty}

<br>

Unit Price:
${price}

<br>


<h3>
Total Amount:
${total} BDT
</h3>


<button onclick="window.print()">
Print Quotation
</button>


`;

}
