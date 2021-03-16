// variabili di controllo
let nameIsValid = false;
let usernameIsValid = false;
let passwordIsValid = false;

const tagUserRegister = document.querySelector('#form-register');

if (tagUserRegister != null) {

    // validation name
    const inputName = document.querySelector('#validation_name');
    inputName.addEventListener("input", () => {

        let inputTrimmed = inputName.value.trim();

        if (
            inputTrimmed.length >= 3 &&
            inputTrimmed.indexOf(' ') != -1 &&
            !hasNumber(inputTrimmed)
            
        ) {
            inputName.classList.remove("is-invalid");
            inputName.classList.add("is-valid");
            nameIsValid = true;
        } else {
            inputName.classList.add("is-invalid");
            inputName.classList.remove("is-valid");
            nameIsValid = false;
        }
    });


    // validation username
    inputUsername = document.querySelector('#validation_username');
    inputUsername.addEventListener("input", () => {

        let inputTrimmed = inputUsername.value.trim();
        if (
            inputTrimmed.length >= 3 &&
            inputTrimmed.indexOf(' ') == -1
            
        ) {
            inputUsername.classList.remove("is-invalid");
            inputUsername.classList.add("is-valid");
            usernameIsValid = true;
        } else {
            inputUsername.classList.add("is-invalid");
            inputUsername.classList.remove("is-valid");
            usernameIsValid = false;
        }
    });

    // validation password
    inputPassword = document.querySelector('#validation_password');
    inputPassword.addEventListener("input", () => {

        let inputTrimmed = inputPassword.value.trim();
        if (
            inputTrimmed.length >= 8 &&
            inputTrimmed.indexOf(' ') == -1
            
        ) {
            inputPassword.classList.remove("is-invalid");
            inputPassword.classList.add("is-valid");
            passwordIsValid = true;
        } else {
            inputPassword.classList.add("is-invalid");
            inputPassword.classList.remove("is-valid");
            passwordIsValid = false;
        }
    });

    document.addEventListener("input", () => {
        if (
            document.querySelector('#validation_name').classList.contains('is-valid') &&
            document.querySelector('#validation_username').classList.contains('is-valid') &&
            document.querySelector('#validation_password').classList.contains('is-valid')
        ) {
            document.querySelector('#btn_submit').disabled = false;
        } else {
            document.querySelector('#btn_submit').disabled = true;
        }
    });


}

// check if string contains number
function hasNumber(myString) {
    return /\d/.test(myString);
}





  


