let saludo = document.querySelector(".saludo");
let emailGuardado= localStorage.getItem("email");
let cerrarSesión = document.querySelector(".cerrar-sesión");
let menuLogin = document.querySelector(".menu-login");
let menuRegistro = document.querySelector(".menu-registro");
if (emailGuardado !== null){
    saludo.innerText= "Bienvenido:" + " " + emailGuardado;
    menuLogin.style.display="none";
    menuRegistro.style.display="none";
}else{
    cerrarSesión.style.display = "none";
}
