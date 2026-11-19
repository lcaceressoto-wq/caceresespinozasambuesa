cerrarSesión.addEventListener("click", function(event){
   event.preventDefault();
    localStorage.removeItem("email");
    saludo.innerText= "";
    cerrarSesión.style.display= "none";
    menuLogin.style.display = "";
    menuRegistro.style.display = "";
});
