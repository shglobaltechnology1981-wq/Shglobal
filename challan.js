function createChallan(){


let customer =
document.getElementById("customer").value;


let company =
document.getElementById("company").value;


let date =
document.getElementById("date").value;


let product =
document.getElementById("product").value;


let quantity =
document.getElementById("quantity").value;



let challanNo =
"CH-" + Date.now();



document.getElementById("challanResult").innerHTML = `


<h2>
SH Global Technology
</h2>


<h3>
Delivery Challan No: ${challanNo}
</h3>


<hr>


Customer Name:
${customer}

<br>


Company:
${company}

<br>


Delivery Date:
${date}

<br><br>



Product:
${product}

<br>


Quantity:
${quantity}



<br><br>


Receiver Signature:

____________________



<br><br>


<button onclick="window.print()">

Print Challan

</button>


`;

}
