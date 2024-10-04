const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

function validateName(){
    const nameValue = nameInput.value.trim();
    if(nameValue === ''){
        showError(nameInput, 'name is required');
    }else if(nameValue.lenght < 2){
        showError(nameInput, 'name must be at least 2 characters');
    }else{
        showSuccess(nameInput)
    }
}

function validateEmail(){
    const emailValue = emailInput.value.trim();
    if(emailValue === ''){
        showError(emailInput, 'Email is required');
    }else if(!/^[a-zA-Z0-9._%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)){
        showError(emailInput, 'invalid email');
    }else{
        showSuccess(emailInput)
    }
}

function validatePssword(){
    const passwordValue = passwordInput.value.trim()
    if(passwordValue === ''){
        showError(passwordInput, 'Password is required')
    }else if(passwordValue.length < 8){
        showError(passwordInput, 'Password must be at least 8 characters')
    }/*else if(!/(?=.[a-z])(?=.[A-Z])(?=.*\d)/.test(passwordValue)){
        showError(passwordInput, 'Password must contain at least 1 uppercase, 1lowercase, and 1 number')

    }*/else{
        showSuccess(passwordInput)
    }
}

function validateConfirmPassword(){
    const confirmPasswordValue = confirmPasswordInput.value.trim()

    if(confirmPasswordValue ===''){
        showError(confirmPasswordInput, 'confirm password ')
    }else if(confirmPasswordValue !== passwordInput.value){
        showError(confirmPasswordInput, 'passwords do not match')
    }else{
        showSuccess(confirmPasswordInput)
    }
}

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText =message;
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    validateName();
    validateEmail();
    validatePssword();
    validateConfirmPassword();

    if(isValidForm()){
        window.location.href ='http://127.0.0.1:5500/index.html';
    }else{
        alert(`Home page couldnt be displayed`)
    }

});

function isValidForm(){
    return document.getElementById('name').classList.contains('success')&&
    document.getElementById('email').classList.contains('success')&&
    document.getElementById('password').classList.contains('success')&&
    document.getElementById('confirm-password').classList.contains('success')
}

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePssword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
