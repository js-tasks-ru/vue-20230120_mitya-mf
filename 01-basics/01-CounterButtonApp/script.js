import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const App = defineComponent({
    name: 'Counter',

    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            return this.counter++;
        }
    }
});



const counterApplication = createApp(App).mount('#app');