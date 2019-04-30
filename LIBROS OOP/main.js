// let if for function


class BookStore {
    constructor() {
        this.books = [];
        this.url = "https://api.myjson.com/bins/1h3vb3";


        this.getData();
        this.activateListeners();
    }

    getData() {
        fetch(this.url)
            .then(data => data.json())
            .then(json => {
                console.log(json.books)
                this.books = json.books;
                this.printBooks(this.books);
            })
            .catch(error => alert(error));
    }


    printBooks(books) {

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

    searchBook(str) {
        let newBooks = this.books.filter(book =>
            book.titulo.includes(str));
        this.printBooks(newBooks);
    }

    activateListeners() {
        document.getElementById("input").addEventListener("keyup", () => {
            this.searchBook(document.getElementById("input").value);
        });
    }
}

let bs = new BookStore();
