var products = [
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


