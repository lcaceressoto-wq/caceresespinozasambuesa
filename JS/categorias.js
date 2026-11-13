let listaCategorias = document.querySelector(".menu-categorias ul");
console.log(listaCategorias);

fetch("https://dummyjson.com/products/categories")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let categorias = "";

        for (let i = 0; i < data.length; i++) {
            categorias += `
                <li>
                    <a href="./category.html?categoria=${data[i].slug}">
                        ${data[i].name}
                    </a>
                </li>
            `;
        }

        listaCategorias.innerHTML = categorias;
    })
    .catch(function(error) {
        console.log(error);
    });