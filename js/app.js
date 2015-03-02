
function showReciept(){
	document.querySelector('.hide').className = "";
}

function getItem(){
	var itemName = document.getElementById('pName').value;
	var quantity = document.getElementById('quantity').value;
	var price = document.getElementById('price').value;

	var item_to_add = document.getElementById('items');

	var iQuantity, 
			iName,
			iPrice;

	itemName.toString();
	// quantity.toString();
	// price.toString();

	if (itemName.trim() !== "" && quantity > 0 && price > 0){
		iQuantity = "<td>" + quantity +"</td>"
		iName = "<td>" + itemName +"</td>"
		iPrice = "<td>" + price +"</td>" 

		item_to_add.innerHTML += "<tr>" + iQuantity + iName + iPrice + "</tr>";

		showReciept();
	} else {
		alert("You must enter the correct values and you must not leave any blank");
	}
}

function addItem (){
	getItem();
}

