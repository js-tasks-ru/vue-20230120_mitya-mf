import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение


const Calculator = defineComponent({
    name: 'Calculator',
    data() {
        return {
            operandA: undefined,
            operandB: undefined,
            operation: undefined
        }
    },
    computed: {
        result() {
            switch (this.operation) {
                case 'sum':
                    return Number(this.operandA) + Number(this.operandB);
                    
                case 'subtract':
                    return this.operandA - this.operandB;
                case 'multiply':
                    return this.operandA * this.operandB;
                case 'divide':
                    return this.operandA / this.operandB;
            }
                
        }
    }
})



const calc = createApp(Calculator).mount('#app');
