let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBuscado = queryStringObj.get("busqueda");

fetch(`https://dummyjson.com/products/search?q=${terminoBuscado}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {


        
   console.log(data); })


    .catch(function(error) {
        console.log("Error: " + error);
    });