const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");
const form = document.querySelector("#form");

const showError = (input, message) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = message;
}

const showsuccess = (input, message) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
    small.innerText = message; 
}

const checkempty = (elements) => {
    elements.forEach((element) => {
        if (element.value === '') {
            showError(element, 'input username');
        } else {
            showsuccess(element, ''); 
        }
    })


}

const checkEmail= (email) =>{

    const reg= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(reg.test(email.value)){
        showsuccess(email);
    }else{
        showError(email, 'input Email');
    }

}

checkpasswordlength = (input, min,max)=>{

    if(input.value.length < min){
        showError(input, `password at least ${min} character`);
    }else if(input.value.length > max){
        showError(input, `password maxium character is ${max}`);
    }else{
        showsuccess(input);
    }

}



form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkempty([username, email, password, confirmpassword]);
    checkEmail(email);

    checkpasswordlength(password, 6,20);
    checkpasswordlength(confirmpassword, 6,20);

});
