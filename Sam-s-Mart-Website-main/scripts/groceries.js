	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true, 
		price: 1.99,
		productImg: "images/broccoli.png" 
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false, 
		price: 2.35,
		productImg: "images/bread.png"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false, 
		price: 10.00,
		productImg: "images/salmon.png"
	},
	{
		name: "carrot",
		vegetarian: true,
		glutenFree: true,
		organic: true, 
		price: 2.63,
		productImg: "images/carrot.png"
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false, 
		price: 6.87,
		productImg: "images/chicken.png"
	},
	{
		name: "cereal",
		vegetarian: false,
		glutenFree: false,
		organic: false, 
		price: 2.97,
		productImg: "images/cereal.png"
	},
	{
		name: "cheese",
		vegetarian: false,
		glutenFree: false,
		organic: false, 
		price: 5.14,
		productImg: "images/cheese.png"
	},
	{
		name: "white fish",
		vegetarian: false,
		glutenFree: true,
		organic: false, 
		price: 13.50,
		productImg: "images/white-fish.png"
	},
	{
		name: "honey",
		vegetarian: false,
		glutenFree: false,
		organic: true, 
		price: 1.89,
		productImg: "images/honey.png"
	},
	{
		name: "onion",
		vegetarian: true,
		glutenFree: true,
		organic: true, 
		price: 2.22,
		productImg: "images/onion.png"
	}
];

products.sort(function(a, b) { 
    return a.price - b.price;
})

function getProductImg(productName) {
	var prodVal = products.find(prod => prod.name === productName);
	return prodVal.productImg;
}


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "VegetarianANDGluten-Free") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Non-Organic") && (prods[i].organic == false)){
			product_names.push(prods[i].name);
		}
		else if ( restriction == "None") {
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	var totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function getItemPrice(chosenProduct){
	for (let i=0; i<products.length; i+=1) {
		if (chosenProduct.indexOf(products[i].name) > -1){
			return products[i].price;
		}
	}
}

