let formulario = document.querySelector(".form-buscador");
let campoBuscar = document.querySelector(".input-buscar");
let mensajeError = document.querySelector(".mensaje-error");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let valorBusqueda = campoBuscar.value.trim();

    if (valorBusqueda == "") {
        mensajeError.innerText = "El campo de búsqueda no puede estar vacío.";
    } else if (valorBusqueda.length < 3) {
        mensajeError.innerText = "El término debe tener al menos 3 caracteres.";
    } else {
        mensajeError.innerText = "";
        this.submit();
    }
});