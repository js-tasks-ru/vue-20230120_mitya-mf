import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      required: true,
      type: String
    },
    place: {
      required: true,
      type: String
    },
    date: {
      required: true,
      type: Number
    }
  },
  computed: {
    formattedDate() {
      const d = new Date(this.date);
      return d.toLocaleDateString(navigator.language, {day: 'numeric', month: 'long', year: 'numeric'})
    }
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time datetime="2020-01-01">{{ formattedDate }}</time>
      </li>
    </ul>`,
});
