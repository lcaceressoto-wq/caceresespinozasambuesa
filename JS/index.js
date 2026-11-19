let contenedorDestacados = document.querySelector(".grilla-destacados");
let contenedorVendidos = document.querySelector(".grilla-vendidos");

fetch("https://dummyjson.com/products/category/beauty?limit=6")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let productos = data.products;

        for (let i = 0; i < productos.length; i++) {
            contenedorDestacados.innerHTML += `
                <article class="Card-productos">
                    <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                    <h3>${productos[i].title}</h3>
                    <p class="Descripcion">${productos[i].description}</p>
                    <p class="Precio">$${productos[i].price}</p>
                    <a href="./product.html?id=${productos[i].id}" class="detalles">Ver detalles</a>
                </article>
            `;
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });

fetch("https://dummyjson.com/products?limit=6&skip=10")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let productos = data.products;

        for (let i = 0; i < productos.length; i++) {
            contenedorVendidos.innerHTML += `
                <article class="Card-productos">
                    <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                    <h3>${productos[i].title}</h3>
                    <p class="Descripcion">${productos[i].description}</p>
                    <p class="Precio">$${productos[i].price}</p>
                    <a href = "./product.html?id=${data.products[i].id}" class = "btn-detalle">  Ver detalle 
                </article>
            `;
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
//LULI: tengo que poner algo en el for para que ande el product 