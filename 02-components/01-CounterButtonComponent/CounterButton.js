import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      default: 0,
      type: Number
    },
 
  },
  emits: ['update:count'],

  methods: {
    // increment(value) {
    //   this.$emit('countIncrement', value++)
    // }
    increaseCount(value) {
      this.$emit('update:count', ++value)
    }
  },


  // Компонент должен иметь входной параметр и порождать событие

  template: `<button type="button" @click="increaseCount(count)">
            {{ count }}</button>`,
});
