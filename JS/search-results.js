let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBuscado = queryStringObj.get("busqueda");

let tituloResultados = document.querySelector(".seccion-productos h2");
let contenedorProductos = document.querySelector(".grilla-productos");

tituloResultados.innerText = `Resultados de búsqueda para: ${terminoBuscado}`;

fetch(`https://dummyjson.com/products/search?q=${terminoBuscado}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let productos = data.products;

        if (productos.length == 0) {
            tituloResultados.innerText = `No hay resultados para el término: ${terminoBuscado}`;
        } else {
            for (let i = 0; i < productos.length; i++) {
                contenedorProductos.innerHTML += `
                    <article class="card-producto">
                        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                        <h3>${productos[i].title}</h3>
                        <p class="descripcion">${productos[i].description}</p>
                        <p class="Precio">$${productos[i].price}</p>
                        <a href="./product.html?id=${productos[i].id}" class="btn-detalle">Ver detalle</a>
                    </article>
                `;
            }
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });