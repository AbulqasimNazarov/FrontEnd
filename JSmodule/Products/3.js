var products = [

  { id: 1, name: "Футболка", price: 20 },
  { id: 2, name: "Шорты", price: 25 },
  { id: 3, name: "Носки", price: 8 },
  { id: 4, name: "Платье", price: 50 }
];

var purchasedItems = [1, 3, 4];

function totally(productsArr, purchasedArr){
  var total = 0;
  for (var i = 0; i < purchasedArr.length; i++) {
      var purchasedProducts = productsArr.find(product=>product.id===purchasedArr[i]);
      if (purchasedProducts) {
          total+=purchasedProducts.price;
      }
      
  }
  return total;
}

var totalBought = totally(products, purchasedItems);
console.log("Totally Bought: $", totalBought);

