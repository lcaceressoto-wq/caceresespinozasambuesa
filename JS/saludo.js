let saludo = document.querySelector(".saludo");
let emailGuardado= localStorage.getItem("email");
let cerrarSesión = document.querySelector(".cerrar-sesión");
let menuLogin = document.querySelector(".menu-login");
let menuRegistro = document.querySelector(".menu-registro");
if (emailGuardado !== null){
    saludo.innerText= "Hola" + " " + emailGuardado;
    menuLogin.style.display="none";
    menuRegistro.style.display="none";
}else{
    cerrarSesión.style.display = "none";
}
cerrarSesión.addEventListener("click", function(){
    localStorage.removeItem("email");
    saludo.innerText= "";
    cerrarSesión.style.display= "none";
    menuLogin.style.display = "";
    menuRegistro.style.display = "";
});
