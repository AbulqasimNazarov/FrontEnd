var button = document.querySelector('.btn');

button.addEventListener('click', () => {
    var urlInputValue = document.getElementById('urlInput').value;
    var descriptionInputValue = document.getElementById('descriptionInput').value;
    var div = document.querySelector('.picture-block');

    var img = document.createElement('img');
    img.src = urlInputValue;
    img.alt = descriptionInputValue;
    div.append(img);

});