function CustomArray() {
    
    var obj = Object.create(Array.prototype);
  
    return obj;
  }

  var customArrayObj = new CustomArray();
  
  
  customArrayObj.push(100);
  console.log(customArrayObj); 
  
  
  