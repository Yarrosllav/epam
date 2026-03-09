const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;

    if (username.value.trim().length < 3) {
        showError(username, 'usernameError', 'Username must be at least 3 characters.');
        isValid = false;
    } else {
        showSuccess(username, 'usernameError');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError(email, 'emailError', 'Please enter a valid email address.');
        isValid = false;
    } else {
        showSuccess(email, 'emailError');
    }

    if (password.value.length < 6) {
        showError(password, 'passwordError', 'Password must be at least 6 characters.');
        isValid = false;
    } else {
        showSuccess(password, 'passwordError');
    }

    if (confirmPassword.value === '') {
        showError(confirmPassword, 'confirmPasswordError', 'Please confirm your password.');
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        showError(confirmPassword, 'confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    } else {
        showSuccess(confirmPassword, 'confirmPasswordError');
    }

    if (isValid) {
        form.classList.add('hidden'); 
        successMessage.classList.remove('hidden'); 
    }
});


function showError(inputElement, errorElementId, message) {
    const errorElement = document.getElementById(errorElementId);
    inputElement.classList.add('error');
    inputElement.classList.remove('success');
    errorElement.innerText = message;
}

function showSuccess(inputElement, errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    inputElement.classList.remove('error');
    inputElement.classList.add('success');
    errorElement.innerText = '';
}