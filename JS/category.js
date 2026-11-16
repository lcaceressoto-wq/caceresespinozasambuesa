let parametros = new URLSearchParams(location.search);
let categoria = parametros.get ("categoria");
console.log(categoria);
let grilla = document.querySelector(".grilla-productos");
let titulo = document.querySelector(".seccion-productos h1");
titulo.innerText = "Categoría:" + " " + categoria;
fetch("https://dummyjson.com/products/category/" + categoria)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    for(let i= 0; i<data.products.length; i++){
        console.log(data.products[i].title);
    }
})
.catch (function(error){
    console.log(error);
});
