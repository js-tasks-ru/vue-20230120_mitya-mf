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
      return new Date(this.date).toLocaleDateString(navigator.language, 
              {day:     'numeric', month: 'long', year: 'numeric'})
    },
    formattedAsIsoDate() {
      return new Date(this.date).toISOString().split('T')[0];
    },
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
        <time :datetime="formattedAsIsoDate">{{ formattedDate }}</time>
      </li>
    </ul>`,
});
