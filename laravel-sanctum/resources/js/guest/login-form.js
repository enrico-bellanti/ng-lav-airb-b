const tagUserLogin = document.querySelector('#form-login');

if (tagUserLogin != null) {
    let loginUserTemplate = `
        <h2>User Registration Form</h2>
        <form class="form_container row g-3">
            <div class="col-12 input_field_container">
                <label for="validation_name" class="form-label">Full name</label>
                <div class="input-group has-validation">
                    <input type="text" class="form-control" id="validation_name" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                    <div class="invalid-feedback">
                        Please insert name and surname.
                    </div>
                </div>
            </div>
            <div class="col-12 input_field input_field_container">
                <label for="validation_username" class="form-label">Email</label>
                <div class="input-group has-validation">
                    <input type="text" class="form-control" id="validation_username" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                    <div class="invalid-feedback">
                        Please insert a valid Username.
                    </div>
                </div>
            </div>
            <div class="col-12 input_field input_field_container">
                <label for="validation_password" class="form-label">Password</label>
                <input type="password" class="form-control" id="validation_password" required>
                <div class="invalid-feedback">
                    Please insert a valid Password.
                </div>
            </div>
            <div class="col-12">
                <button id="btn_submit" type="button" class="btn btn-success" disabled>Register</button>
            </div>
        </form>
    `;

    tagUserLogin.innerHTML = loginUserTemplate;

    // Send form registration to back end with api
    const apiUserLogin = 'http://127.0.0.1:8000/api/login';

    const dataForm = 
    {
        "email" : "enrico.bellanti@gmail.com",
        "password" : "Be190686!"
    };


    fetch(apiUserLogin, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: dataForm
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })

    document.querySelector('#btn_submit').addEventListener("click", () => {

        fetch(apiUserLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForm),
        })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });

    });
}