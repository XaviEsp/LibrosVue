Vue.component("book", {
    props: ['book'],

    template: `
    <div  class="flip-container">
                <div class="flipper">
                    <div class="front">
                        <img class="portada" :src="book.portada" />
                    </div>
                    <div class="back">
                        <p class="titulo">{{book.titulo}}</p>
                        <p class="desc">{{book.descripcion}}</p>
                        <a data-fancybox="gallery" :href="book.detalle"><button>More Info</button></a>


                    </div>
                </div>
            </div>
    
    `
})