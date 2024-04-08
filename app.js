const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    title: "You don't know JS",
                    author: "KTZ",
                    age: 27,
                    img: "imgs/img1.jpg",
                    isFav: true
                },
                {
                    title: "Book 2",
                    author: "AA",
                    age: 28,
                    img: "imgs/img2.jpg",
                    isFav: false
                },
                {
                    title: "Book 3",
                    author: "BB",
                    age: 29,
                    img: "imgs/img3.jpg",
                    isFav: true
                }
            ],
            showBook: true,
            link: "http://www.google.com",
        }
    },
    methods: {
        mouseoverHandler(event, data) {
            console.log('mouseover is working', event.type, data);
        },
        mouseleaveHandler(event) {
            console.log('mouseleave is working', event.type);
        },
        dblclickHandler(event) {
            console.log('dbl click', event.type);
        },
        clickHandler(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => {
                return book.isFav;
            });
        }
    }
});

app.mount('#app');