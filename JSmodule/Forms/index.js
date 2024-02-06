var forms = document.forms;
var formSign = forms.signUp;
var elements = formSign.elements;
var nameElement = elements.name;
var surnameElement = elements.surname;
var genderMale = elements.maleGender;
var genderFemale = elements.femaleGender;
var divMilitary = document.querySelector('.militaryQuestion');
var divArmy = document.querySelector('.armyQuestion');
var militaryServing = elements.militaryServe;
var firstNameErr = document.getElementById('firstNameError');
var lastNameErr = document.getElementById('lastNameError')
var ageElement = elements.age;
var ageError = document.getElementById('ageError');

var btn = elements.btn;


function validateForm(e) {    
    e.preventDefault();
    const nameRegex = /^[a-zA-Z]{5,8}$/;

    
    if (!nameRegex.test(nameElement.value)) {
      firstNameErr.textContent = 'Ошибка: Имя должно содержать только буквы, быть от 5 до 8 символов.';
      firstNameErr.style.color = 'red';
      firstNameErr.style.border = '2px solid red';
    } else {
      firstNameErr.textContent = '';
      firstNameErr.style.border = '2px solid white';
    }

    if (!nameRegex.test(surnameElement.value)) {
      lastNameErr.textContent = 'Ошибка: Фамилия должна содержать только буквы, быть от 5 до 8 символов.';
      lastNameErr.style.color = 'red';
      lastNameErr.style.border = '2px solid red';
    } else {
      lastNameErr.textContent = '';
      lastNameErr.style.border = '2px solid white';
    }

    if (isNaN(ageElement.value) || ageElement.value < 14 || ageElement.value > 100) {
        ageError.textContent = 'Возраст должен быть числом от 14 до 100';
        ageError.style.color = 'red';
        ageError.style.border = '2px solid red';
    } else {
        ageError.textContent = '';
        ageError.style.border = '2px solid white';
    }



    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = emailInput.value;

    if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Ошибка: Введите корректный адрес электронной почты.';
        emailError.style.color = 'red';
        emailError.style.border = '2px solid red';
    } else {
        emailError.textContent = '';
        emailError.style.border = '2px solid white';


        formSign.submit();
    }
    

    
}


ageElement.addEventListener('input', function() {
    const age = parseInt(ageElement.value);
    const additionalQuestions = document.querySelector('.additionalQuestions');
    const cigaretteBrandInput = document.getElementById('cigaretteBrand');

    if (age > 18) {
        additionalQuestions.style.display = 'block';
    } else {
        additionalQuestions.style.display = 'none';
        cigaretteBrandInput.value = ''; 
    }
});


const smokeCheckbox = elements.smoke;
const cigaretteBrandDiv = document.querySelector('.cigaretteBrand');

smokeCheckbox.addEventListener('change', function() {
    if (smokeCheckbox.checked) {
        cigaretteBrandDiv.style.display = 'block';
    } else {
        cigaretteBrandDiv.style.display = 'none';
        cigaretteBrandInput.value = ''; 
    }
});


function handleGenderChange() {
    if(genderMale.checked){
        
        divMilitary.style.display = 'block';
    } else {
        divMilitary.style.display = 'none';
    }
}


function handleMilitaryChek() {
    if(militaryServing.checked){
        divArmy.style.display = 'block';
    }else {
        divArmy.style.display = 'none';
    }
}

const cigaretteBrandInput = document.getElementById('cigaretteBrand');
const cigaretteBrandError = document.getElementById('cigaretteBrandError');


cigaretteBrandInput.addEventListener('input', function() {
    const cigaretteBrandRegex = /^[a-zA-Z0-9]{5,8}$/;
    const brandValue = cigaretteBrandInput.value;

    if (!cigaretteBrandRegex.test(brandValue)) {
        cigaretteBrandError.textContent = 'Ошибка: Название сигарет должно состоять из букв и цифр, быть от 5 до 8 символов, и содержать только 1 слово без пробелов.';
        cigaretteBrandError.style.color = 'red';
        cigaretteBrandError.style.border = '2px solid red';
    } else {
        cigaretteBrandError.textContent = '';
        cigaretteBrandError.style.border = '2px solid white';
    }
});



const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');




  
genderMale.addEventListener('change', handleGenderChange);
genderFemale.addEventListener('change', handleGenderChange);
militaryServing.addEventListener('change', handleMilitaryChek);
btn.addEventListener('click', validateForm);
