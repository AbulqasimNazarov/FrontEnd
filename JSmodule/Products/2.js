var products = [
    { name: "Футболка", price: 20 },
    { name: "Шорты", price: 25 },
    { name: "Носки", price: 8 },
    { name: "Платье", price: 50 }
  ];



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