
// obtengo la query string de la URL
let queryString = location.search;

// ahora hago esto para convertir la query string en un objeto
let queryStringObj = new URLSearchParams(queryString);

// obtengo el ID del producto
let idProducto = queryStringObj.get('id');

//  le pido a la API utilizando el ID
fetch('https://dummyjson.com/products/' + idProducto)

    .then(function(response) {
        return response.json();
    })

    .then(function(data) {

        // capturo uno por uno los elementos del HTML
        let marca = document.querySelector('.marca-producto');
        let precio = document.querySelector('.precio-detalle');
        let categoria = document.querySelector('.categoria-producto');
        let stock = document.querySelector('.stock-producto');
        let imagen = document.querySelector('.img-producto');
        let titulo = document.querySelector('.titulo-producto');
        let descripcion = document.querySelector('.descripcion-producto');
        let listaTags = document.querySelector('.lista-tags');
        let contenedorReviews = document.querySelector('.contenedor-reviews');

        // modificamos la información del producto (cambio lo que tenia en el html por lo que viene de la API)
        titulo.innerText = data.title;
        marca.innerText = 'Marca: ' + data.brand;
        precio.innerText = 'Precio: $' + data.price;
        categoria.innerText = data.category;
        stock.innerText = 'Stock: ' + data.stock + ' unidades';
        descripcion.innerText = data.description;

        // modifico la imagen que tenia en el html por la imagen que viene de la API 
        imagen.src = data.images[0];

        // modificamos el enlace de la categoría para que sepa que categoria mostrar y asi traerla desde la API 
        categoria.href = './category.html?categoria=' + data.category;

        // mostramos las etiquetas del producto
        listaTags.innerHTML = '';

        for (let i = 0; i < data.tags.length && i < 3; i++) {
            listaTags.innerHTML += '<li>#' + data.tags[i] + '</li>';
        }

        // esto es para mostrar las opiniones de los usuarios
          
        contenedorReviews.innerHTML = '';
      
        // uso innerHTML pq quiero agregar etiquetas como p y article, no solamente texto. Uso += pq quiero agregar cada opinion sin borrara la anterior 

        for (let i = 0; i < data.reviews.length; i++) {
            contenedorReviews.innerHTML += `
                <article class="card-opinion">
                    <p>Usuario: ${data.reviews[i].reviewerName}</p>
                    <p>Fecha: ${data.reviews[i].date}</p>
                    <p>Rating: ${data.reviews[i].rating}</p>
                    <p>${data.reviews[i].comment}</p>
                </article>
            `;
        }

    })

    .catch(function(error) {
        console.log('El error fue: ' + error);
    });
