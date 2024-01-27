var productsArray = [
  {
    name: 'Яблоко',
    price: 1.00,
    quantity: 50
  },
  {
    name: 'Банан',
    price: 0.75,
    quantity: 30
  },
  {
    name: 'Апельсин',
    price: 1.25,
    quantity: 40
  }
];


function createElement(productsArray) {

  
  let div = document.createElement('div');
  //div.classList.add('squeraDiv');
  productsArray.forEach(product => {
    let square = document.createElement('div');
    square.classList.add('squeraDiv');
    let firstPrName = document.createElement('p');
    let firstPrPrice = document.createElement('p');
    let firstPrQuantity = document.createElement('p');
    firstPrName.textContent = "product:" + product.name;
    firstPrPrice.textContent = "price:" + product.price;
    firstPrQuantity.textContent = "quantity:" + product.quantity;
    
    square.append(firstPrName);
    square.append(firstPrPrice);
    square.append(firstPrQuantity);
    
    
    div.append(square);
  });

  document.body.append(div);
  console.log("okey");

}


createElement(productsArray);



