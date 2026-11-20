// capturo los elementos
let formularioRegister = document.querySelector('.form-auth');

let email = document.querySelector('.email');
let password = document.querySelector('.password');
let repetirPassword = document.querySelector('.confirm-password');

formularioRegister.addEventListener('submit', function(event) {

    // evito que el formulario se envíe automáticamente
    event.preventDefault();

    // valido que el email no esté vacío
    if (email.value == '') {

        alert("El email es obligatorio");

    }

    // valido que la contraseña no esté vacía
    else if (password.value == '') {

        alert("La contraseña es obligatoria");

    }

    // valido que tenga al menos 6 caracteres
    else if (password.value.length < 6) {

        alert("La contraseña debe tener al menos 6 caracteres");

    }

    // valido que se haya repetido la contraseña
    else if (repetirPassword.value == '') {

        alert("Tenés que repetir la contraseña");

    }

    // comparo las dos contraseñas
    else if (password.value != repetirPassword.value) {

        alert("Las contraseñas no coinciden");

    }

    // si todas las validaciones están bien
    else {

        alert("¡Registro correcto!");
        location.href = "./login.html";

    }

});