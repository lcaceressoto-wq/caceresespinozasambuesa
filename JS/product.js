
//ahora pongo esto para saber que producto puntual hizo clic el usuario y asi poder pedirselo a la API 

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProducto = queryStringObj.get('id');


fetch('https://dummyjson.com/products/' + idProducto)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        
    let marca = document.querySelector('.marca-producto'); 
    let precio = document.querySelector('.precio-detalle');
    let categoria = document.querySelector('.categoria-producto');
    let stock = document.querySelector('.stock-producto');
    let imagen = document.querySelector('.img-producto');
    let titulo = document.querySelector('.titulo-producto');
    let descripcion = document.querySelector('.descripcion-producto');
    let listaTags = document.querySelector('.lista-tags');
    let contenedorReviews = document.querySelector('.contenedor-reviews');

       // aca voy a cambier la foto 
       imagen.src = data.images[0]

       //ahora esto es para cambiar el nombre del producto 
        titulo.innerText = data.title 

       

       
    })
    .catch(function(error) {
        console.log('El error fue: ' + error);
    });