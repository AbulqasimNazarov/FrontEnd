var gallery = document.getElementById('gallery');
var imageUrlInput = document.getElementById('imageUrl');
var altTextInput = document.getElementById('altText');
var addButton = document.getElementById('addImage');

    
addButton.addEventListener('click', () => {
      
    var imageUrl = imageUrlInput.value;
    var altText = altTextInput.value;
    
    var imageContainer = document.createElement('div');
    var image = document.createElement('img');
    var deleteButton = document.createElement('button');
    
    image.src = imageUrl;
    image.alt = altText;
    deleteButton.textContent = 'Delete';
    
    image.addEventListener('click', () => {
      
      if (altText) {
        console.log('Alt текст:', altText);
      } else {
        
        image.classList.add('highlight');
      }
    });
    
    deleteButton.addEventListener('click', function() {
      
      gallery.removeChild(imageContainer);
    });
    
    imageContainer.appendChild(image);
    imageContainer.appendChild(deleteButton);
    
    gallery.appendChild(imageContainer);
    
    imageUrlInput.value = '';
    altTextInput.value = '';
});