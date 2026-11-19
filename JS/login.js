//Busco el formulario de login, lo capturo y lo guardo en una variable.
let formularioLogin = document.querySelector(".form-auth");
//Busco el input donde el usuario escribe su email y lo capturo.
let email= document.querySelector(".email");
//Capturo el input donde escribe su contraseña.
let contraseña= document.querySelector(".Pass");
// Cuando se intenta enviar el formulario, se ejecuta esta función. 
formularioLogin.addEventListener("submit", function(event){
    //Evito el envío automático para primero revisar los datos.
    event.preventDefault();
    // .value obtiene lo escrito en el input; " " significa vacío.
    if(email.value===""){
        //Si falta el emil, muestro este aviso.
        alert("Completa tu correo electrónico");
        //Si hay email, compruebo si falta la contraseña. 
    } else if (contraseña.value===""){
        alert("Completá tu contraseña");
        //.length cuenta los caracteres de la contraseña. 
    } else if(contraseña.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres")
    //Si no se cumple ninguna condicion anterior, continuo. 
    }
     else {
        //Guardo el email en el navegador con la clave "email".
        localStorage.setItem("email", email.value);
        //Llevo al usuario a la pagina de inicio.
        location.href = "./index.html";
    }});
