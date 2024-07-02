// Sign in

const email__signin = document.querySelector(".email__signin");
const password__signin = document.querySelector(".password__signin");
const signinBtn = document.querySelector(".login");
const error__email_signin = document.querySelector(".error__email_signin");
const error__password_signin = document.querySelector(".error__password_signin");

signinBtn.onclick = function(x) {
    x.preventDefault();
    var flag = true;
    if (password__signin.value == "") {
        password__signin.style = 'border: 1px solid #F54748;';
        password__signin.focus();
        error__password_signin.innerHTML = 'Please enter password!';
        flag = false;
    } else {
        password__signin.style = 'border: 1px solid #37A9CD;';
        error__password_signin.innerHTML = '';
    }
    var req_email = /\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
    if (email__signin.value == '') {
        email__signin.style = 'border: 1px solid #F54748;';
        email__signin.focus();
        error__email_signin.innerHTML = 'Please enter email!';
        flag = false;
    } else if (!req_email.test(email__signin.value)) {
        email__signin.style = 'border: 1px solid #F54748;';
        email__signin.focus();
        error__email_signin.innerHTML = 'Please enter the correct email format!';
        flag = false;
    } else {
        email__signin.style = 'border: 1px solid #37A9CD;';
        error__email_signin.innerHTML = '';
    }
    if (flag) {
        alert('Sign in success!');
        window.location.href = 'index.html';
    }
    return flag;
}