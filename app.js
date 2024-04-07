const app = Vue.createApp({
    data() {
        return {
            title: "you don't know js",
            author: "ktz",
            age: 20,
            showBook: true
        }
    },
    methods: {
        increaseAge(){
            this.age++;
        }
    }
});

app.mount('#app');