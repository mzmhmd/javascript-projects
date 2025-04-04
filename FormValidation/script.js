const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener('submit', (e) => {
    let message = []

    if(name.value === '' || name.value == null){
        message.push('Name is required!');
    }

    if(password.value.length <= 6){
        message.push('Password must be longer than 6 characters');
    }

    if(password.value.length >= 20){
        message.push('Password must be less than 20 characters');
    }

    if(password.value === 'password'){
        message.push('password cannot be password');
    }

    if(message.length > 0){
        e.preventDefault()
        error.innerText = message.join(', ')
    }
})