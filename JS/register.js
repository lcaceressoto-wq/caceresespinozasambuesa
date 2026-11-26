
let formularioRegister = document.querySelector('.form-auth');

let email = document.querySelector('.email');
let password = document.querySelector('.password');
let repetirPassword = document.querySelector('.confirm-password');

formularioRegister.addEventListener('submit', function(event) {

    
    event.preventDefault();

   
    if (email.value == '') {

        alert("El email es obligatorio");

    }

    
    else if (password.value == '') {

        alert("La contraseña es obligatoria");

    }

    else if (password.value.length < 6) {

        alert("La contraseña debe tener al menos 6 caracteres");

    }

    
    else if (repetirPassword.value == '') {

        alert("Tenés que repetir la contraseña");

    }

   
    else if (password.value != repetirPassword.value) {

        alert("Las contraseñas no coinciden");

    }

   
    else {

        alert("¡Registro correcto!");
        location.href = "./login.html";

    }

});