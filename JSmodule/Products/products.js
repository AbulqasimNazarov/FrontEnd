const products = [
  { name: "Футболка", price: 20 },
  { name: "Шорты", price: 25 },
  { name: "Носки", price: 8 },
  { name: "Платье", price: 50 }
];


function calculateTotalCost(products) {
    let totalCost = 0;
  
    for (let i = 0; i < products.length; i++) {
      totalCost += products[i].price;
    }
  
    return totalCost;
}
  
  const totalCost = calculateTotalCost(products);
  console.log("Общая стоимость товаров: $", totalCost);



  function calculateTotalCostAndFilter(products, threshold) {
    let totalCost = 0;
    let expensiveProducts = products.filter(product => {
      totalCost += product.price;
      return product.price > threshold;
    });
  
    return {
      totalCost: totalCost,
      expensiveProducts: expensiveProducts
    };
  }
  
  const threshold = 20;
  const result = calculateTotalCostAndFilter(products, threshold);
  

  
  if (result.expensiveProducts.length > 0) {
    console.log("Товары с ценой выше " + threshold + ":");
    result.expensiveProducts.forEach(product => {
      console.log(product.name + ": $" + product.price);
    });
  } else {
    console.log("Нет товаров с ценой выше " + threshold);
  }




  const products1 = [
    { id: 1, name: "Футболка", price: 20 },
    { id: 2, name: "Шорты", price: 25 },
    { id: 3, name: "Носки", price: 8 },
    { id: 4, name: "Платье", price: 50 }
  ];
  
  const purchasedItems = [1, 3, 4];

  function totally(productsArr, purchasedArr){
    var total = 0;
    for (var i = 0; i < purchasedArr.length; i++) {
        if(purchasedArr[i]===productsArr[i].id){
            total += productsArr[i].price;

        }
        
    }
    return total;
  }

  var totalBought = totally(products1, purchasedItems);
  console.log("Totally Bought: $", totalBought);