// Contact us

const fullname = document.querySelector(".fullname");
const email = document.querySelector(".email");
const subject = document.querySelector(".subject");
const enquiry = document.querySelector(".enquiry");
const message = document.querySelector(".message");
const contactBtn = document.querySelector(".contactBtn");
const error__name_contact = document.querySelector(".error__name_contact");
const error__email_contact = document.querySelector(".error__email_contact");
const error__subject_contact = document.querySelector(".error__subject_contact");
const error__enquiry_contact = document.querySelector(".error__enquiry_contact");
const error__messages_contact = document.querySelector(".error__messages_contact");

contactBtn.onclick = function(c) {
    c.preventDefault();
    var flag = true;
    if (enquiry.value == "" || enquiry.value == "0") {
        enquiry.style = 'border: 1px solid #F54748;';
        enquiry.focus();
        error__enquiry_contact.innerHTML = 'Please select enquiry type!';
        flag = false;
    } else {
        enquiry.style = 'border: 1px solid #37A9CD;';
        error__enquiry_contact.innerHTML = '';
    }
    if (subject.value == "") {
        subject.style = 'border: 1px solid #F54748;';
        subject.focus();
        error__subject_contact.innerHTML = 'Please enter subject!';
        flag = false;
    } else {
        subject.style = 'border: 1px solid #37A9CD;';
        error__subject_contact.innerHTML = '';
    }
    var req_email = /\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
    if (email.value == '') {
        email.style = 'border: 1px solid #F54748;';
        email.focus();
        error__email_contact.innerHTML = 'Please enter email!';
        flag = false;
    } else if (!req_email.test(email.value)) {
        email.style = 'border: 1px solid #F54748;';
        email.focus();
        error__email_contact.innerHTML = 'Please enter the correct email format!';
        flag = false;
    } else {
        email.style = 'border: 1px solid #37A9CD;';
        error__email_contact.innerHTML = '';
    }
    if (fullname.value == "") {
        fullname.style = 'border: 1px solid #F54748;';
        fullname.focus();
        error__name_contact.innerHTML = 'Please enter full name!';
        flag = false;
    } else {
        fullname.style = 'border: 1px solid #37A9CD;';
        error__name_contact.innerHTML = '';
    }
    if (flag) {
        alert("Your message has been sent successfully!");
        window.location.href = 'index.html';
    }
    return flag;
}