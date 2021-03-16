const tagUserRegister = document.querySelector('#form-register');

if (tagUserRegister != null) {
    let registerUserTemplate = `
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

    tagUserRegister.innerHTML = registerUserTemplate;

    // Send form registration to back end with api
    const apiUserRegister = 'http://127.0.0.1:8000/api/register';

    const dataForm = 
    {
        "name" : "Eleonora Leali884",
        "email" : "eleonora8848@gmail.com",
        "password" : "Be190686!"
    };


    console.log('token',document.getElementById('csrf-token').innerHTML);
    
    fetch(apiUserRegister, {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'X-CSRF-TOKEN': document.getElementById('csrf-token').innerHTML
        }
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });


    document.querySelector('#btn_submit').addEventListener("click", () => {

        fetch(apiRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': $('#csrf-token').attr('content')
            },
            body: JSON.stringify(dataForm),
        })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });

    });
}


