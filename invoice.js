function createInvoice(){


let customer =
document.getElementById("customer").value;


let company =
document.getElementById("company").value;


let product =
document.getElementById("product").value;


let quantity =
Number(document.getElementById("quantity").value);


let price =
Number(document.getElementById("price").value);



let total = quantity * price;



let invoiceNo =
"SHGT-" + Date.now();



document.getElementById("invoiceResult").innerHTML = `


<h2>
SH Global Technology
</h2>


<h3>
Invoice No: ${invoiceNo}
</h3>


<hr>


Customer Name:
${customer}

<br>


Company:
${company}

<br><br>


Product:
${product}

<br>


Quantity:
${quantity}

<br>


Unit Price:
${price} BDT

<br>


<h3>
Total:
${total} BDT
</h3>



<p>
Payment Status: Pending
</p>



<button onclick="window.print()">
Print Invoice
</button>


`;

}
