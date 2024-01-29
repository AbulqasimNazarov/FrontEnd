var button = document.querySelector('.btn');
var buttonDelete = document.createElement('button');
buttonDelete.textContent = 'Delete';

button.addEventListener('click', () => {
    var urlInputValue = document.getElementById('urlInput').value;
    var descriptionInputValue = document.getElementById('descriptionInput').value;
    var div = document.querySelector('.picture-block');

    var img = document.createElement('img');
    var divBlock = document.getElementById('imageBlock');
    
    
    divBlock.append(img);
    divBlock.append(buttonDelete);
    
    img.src = urlInputValue;
    img.alt = descriptionInputValue;
    div.append(divBlock);
    
});


buttonDelete.addEventListener('click', () => {
    
    var divBlock = document.getElementById('imageBlock');

    divBlock.remove();
});