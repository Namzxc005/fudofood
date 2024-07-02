var listAccount = []

// Sign up

const email_signup = document.querySelector(".signup__email");
const fullname_signup = document.querySelector(".signup__fullname");
const password_signup = document.querySelector(".signup__password");
const repassword_signup = document.querySelector(".signup__repassword");
const signupBtn = document.querySelector(".create");
const error__email_signup = document.querySelector(".error__email_signup");
const error__fullname_signup = document.querySelector(".error__fullname_signup");
const error__password_signup = document.querySelector(".error__password_signup");
const error__repassword_signup = document.querySelector(".error__repassword_signup");

signupBtn.onclick = function(u) {
    u.preventDefault();
    var flag = true;
    if (password_signup.value == '') {
        password_signup.style = 'border: 1px solid #F54748;';
        password_signup.focus();
        error__password_signup.innerHTML = 'Please enter password!';
        flag = false;
    } else {
        password_signup.style = 'border: 1px solid #37A9CD;';
        error__password_signup.innerHTML = '';
    }
    if (repassword_signup.value != password_signup.value) {
        repassword_signup.style = 'border: 1px solid #F54748;';
        repassword_signup.focus();
        error__repassword_signup.innerHTML = 'Please enter the same password!';
        flag = false;
    } else {
        repassword_signup.style = 'border: 1px solid #37A9CD;';
        error__repassword_signup.innerHTML = '';
    }
    if (fullname_signup.value == '') {
        fullname_signup.style = 'border: 1px solid #F54748;';
        fullname_signup.focus();
        error__fullname_signup.innerHTML = 'Please enter fullname!';
        flag = false;
    } else {
        fullname_signup.style = 'border: 1px solid #37A9CD;';
        error__fullname_signup.innerHTML = '';
    }
    var req_email = /\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
    if (email_signup.value == '') {
        email_signup.style = 'border: 1px solid #F54748;';
        email_signup.focus();
        error__email_signup.innerHTML = 'Please enter email!';
        flag = false;
    } else if (!req_email.test(email_signup.value)) {
        email_signup.style = 'border: 1px solid #F54748;';
        email_signup.focus();
        error__email_signup.innerHTML = 'Please enter the correct email format!';
        flag = false;
    } else {
        email_signup.style = 'border: 1px solid #37A9CD;';
        error__email_signup.innerHTML = '';
    }
    if (flag) {
        let account = {
            email: email_signup.value,
            password: password_signup.value,
            fullname: fullname_signup.value
        }
        listAccount.push(account);
        localStorage.setItem('listAccount', JSON.stringify(listAccount));
        alert('Sign up success!');
        window.location.href = 'index.html';
    }
    console.log(listAccount);
    return flag;
}