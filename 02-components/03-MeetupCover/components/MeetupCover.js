import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: String,
    image: String
  },
  computed: {
    url() {
      return this.image ? `--bg-url: url('${this.image}')` : ""
    }
  },
  template: `
    <div class="meetup-cover" :style=url>
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});



