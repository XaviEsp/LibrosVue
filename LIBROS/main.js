console.log("iodahfoi");
// Recoger la url JSON
let url = "https://api.myjson.com/bins/1h3vb3";
// La variable Books empieza sin nada

// Hacer un fetch que 
fetch(url)
    .then(data => data.json())
    .then(json => {
        console.log(json.books)
        books = json.books;
        // Esto viene de la function printBooks
        printBooks(books);
    })
    .catch(error => alert(error));

// imprimir los libros haciendo un template para cada libro 
function printBooks(books) {
    let template = '';
    books.forEach(book => {
        template += `
        <div class="flip-container">
	<div class="flipper">
		<div class="front">
			<img class="portada" src="${book.portada}"/>
		</div>
		<div class="back">
            <p class="titulo">${book.titulo}</p>
            <p class="desc">${book.descripcion}</p>
            <a data-fancybox="gallery" href=${book.detalle}"><button>More Info</button></a>
        
        
        </div>
	</div>
</div>
        
        `;

    });


    // recoger el container que es un array y coger el primero [0]
    document.getElementsByClassName("container")[0].innerHTML = template;
}

document.getElementById("input").addEventListener("keyup", () => {
    searchBook(document.getElementById("input").value);

    // let text = document.getElementById("input").Value;
    // searchBook(text);
})

function searchBook(string) {
    let newBooks = books.filter(book => {
        return book.titulo.includes(string) ||
            book.descripcion.includes(string);
    });

    printBooks(newBooks);
}



