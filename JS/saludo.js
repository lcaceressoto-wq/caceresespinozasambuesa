let saludo = document.querySelector(".saludo");
let emailGuardado= localStorage.getItem("email");
if (emailGuardado !== null){
    saludo.innerText= "Hola" + " " + emailGuardado;
}
