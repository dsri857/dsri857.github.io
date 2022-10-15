const form = document.getElementById('form')
const username = document.getElementById('name')
const phone = document.getElementById('phnmb')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cpassword = document.getElementById('cnfmpass')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})


const validate = () => {
    
    const usernameVal = username.value.trim();
    const phoneVal = phone.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
   
    if (usernameVal === "") {
        setErrorMsg(username, "Can't be blank");
    } else if (usernameVal.length < 3) {
        setErrorMsg(username, "Min 3 characters");
    }
    else {
        setSuccesMsg(username);
    }
    //phone
    if (phoneVal === "") {
        setErrorMsg(phone, "Can't be blank");
    } else if (phoneVal.length != 10) {
        alert
        setErrorMsg(phone, "Must be 10 digits");
    }
    else {
        setSuccesMsg(phone);
    }
    //email
    if (emailVal === "") {
        setErrorMsg(email, "Can't be blank");
    } else {
        setSuccesMsg(email);
    }
    
    if (passwordVal === "") {
        setErrorMsg(password, "Can't be blank");
    } else if (password.length <= 8) {
        setErrorMsg(password, "Must have more than 8 chrs");
    }
    else {
        setSuccesMsg(password);
    }
    //Confirm Password
    if (cpasswordVal === "") {
        setErrorMsg(cpassword, "Can't be blank")
    }
    else if (cpasswordVal === passwordVal) {
        setSuccesMsg(cpassword);
    }
    else {
        setErrorMsg(cpassword, "Doesn't match")
    }
    successMsg();
}

//function  
function setErrorMsg(input, errormsgs) 
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerHTML = errormsgs;
}
function setSuccesMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
