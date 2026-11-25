let formularioLogin = document.querySelector(".form-auth");
let email= document.querySelector(".email");
let contraseña= document.querySelector(".Pass");
formularioLogin.addEventListener("submit", function(event){
    event.preventDefault();
    if(email.value===""){
        alert("Completa tu correo electrónico");
    } else if (contraseña.value===""){
        alert("Completá tu contraseña");
    } else if(contraseña.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres")
    }
     else {
        localStorage.setItem("email", email.value);
        location.href = "./index.html";
    }});
