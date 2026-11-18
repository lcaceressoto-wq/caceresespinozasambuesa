//capturo los elementos 
let formulario = document.querySelector('.form-auth');

let email = document.querySelector('#email');
let password = document.querySelector('#password');
let repetirPassword = document.querySelector('#confirm-password');

let mensajeError = document.querySelector('.mensaje-error');

formulario.addEventListener ('submit', function(event) {
  // evito que el formulario se envíe automáticamente

   event.preventDefault();

    // valido que el email no esté vacío

    if (email.value == '') {

        mensajeError.innerText = 'El email es obligatorio';

}
  
    else if (password.value == '') {

        mensajeError.innerText = 'La contraseña es obligatoria';

    }

    // esto lo hago para validar que tenga al menos como minimo 6 caracteres 

    else if (password.value.length < 6) {

        mensajeError.innerText = 'La contraseña debe tener al menos 6 caracteres';

    }
    else if (password.value != repetirPassword.value) {

        mensajeError.innerText = 'Las contraseñas no coinciden';

    }

    // en caso de q todas las validaciones esten bien 

    else {

        mensajeError.innerText = '';

        window.location.href = './login.html';

    }

});