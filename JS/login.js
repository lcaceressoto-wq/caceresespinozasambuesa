let formulario = document.querySelector(".form-auth");
let email= document.querySelector(".email");
let contraseña= document.querySelector(".Pass");
console.log(email);
console.log(contraseña);
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if(email.value===""){
        alert("Completa tu correo electrónico");
    } else if (contraseña.value===""){
        alert("Completá tu contraseña");
    } else {
        localStorage.setItem("email", email.value);
        location.href = "./index.html";
    }})
