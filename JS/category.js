let parametros = new URLSearchParams(location.search);
let categoria = parametros.get ("categoria");
console.log(categoria);
let grilla = document.querySelector(".grilla-productos");
let titulo = document.querySelector(".seccion-productos h1");
if (categoria === null || categoria === ""){
    titulo.innerText = "Elegí una categoría del menú"
}else {
    titulo.innerText = "Categoría:" + " " + categoria;


fetch("https://dummyjson.com/products/category/" + categoria)
.then(function(response){
    return response.json();
})
.then(function(data){
    let productos =""; 
    for(let i= 0; i<data.products.length; i++){
        productos +=`
        <article class="card-producto">
        <img src= " ${data.products[i].thumbnail}" alt="${data.products[i].title}">
        <h3>${data.products[i].title}</h3>
        <p class = "precio"> $${data.products[i].price}</p>
        <a href = "./product.html?id=${data.products[i].id}" class = "btn-detalle"> 
            Ver detalle 
        </a>
        </article>
        `;
    }
    grilla.innerHTML = productos; 
})
.catch (function(error){
    console.log(error);
});
}