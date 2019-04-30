let myApp = new Vue({
    el: "#app",
    data: {
        url: "https://api.myjson.com/bins/1h3vb3",
        books: [],
        searchValue: ""
    },
    methods: {
        getBooks() {
            fetch(this.url)
                .then(data => data.json())
                .then(json => this.books = json.books
                );
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.titulo.includes(this.searchValue));
        }
    },
    created() {
        this.getBooks();
    }
});

myApp.getBooks();