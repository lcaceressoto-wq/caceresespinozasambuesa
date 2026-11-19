//Busco y capturo el elemento del HTML donde voy a mostrar el saludo.
let saludo = document.querySelector(".saludo");
// Recupero el email guardado. 
let emailGuardado= localStorage.getItem("email");
//Busco el botón de cerrar sesión y lo capturo.
let cerrarSesión = document.querySelector(".cerrar-sesión");
//Busco el elemento del menú que contiene el encale a Login y lo capturo.
let menuLogin = document.querySelector(".menu-login");
//Busco el elemento del menú que contiene el enlace a Registro.
let menuRegistro = document.querySelector(".menu-registro");
if (emailGuardado !== null){
    saludo.innerText= "Bienvenido:" + " " + emailGuardado;
    menuLogin.style.display="none";
    menuRegistro.style.display="none";
}else{
    cerrarSesión.style.display = "none";
}
