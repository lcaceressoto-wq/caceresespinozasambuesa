

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

       
        titulo.innerText = data.title;
        marca.innerText = 'Marca: ' + data.brand;
        precio.innerText = 'Precio: $' + data.price;
        categoria.innerText = data.category;
        stock.innerText = 'Stock: ' + data.stock + ' unidades';
        descripcion.innerText = data.description;

      
        imagen.src = data.images[0];

         
        categoria.href = './category.html?categoria=' + data.category;

       
        listaTags.innerHTML = '';

        for (let i = 0; i < data.tags.length && i < 3; i++) {
            listaTags.innerHTML += '<li>#' + data.tags[i] + '</li>';
        }

        
          
        contenedorReviews.innerHTML = '';
      
        

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
