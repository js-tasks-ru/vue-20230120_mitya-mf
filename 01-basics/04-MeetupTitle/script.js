import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение

const Meetups = defineComponent({
  name: 'MeetupTitle',
  data() {
    return {
      title: '',
      id: '0'
    }
  },
  watch: {
    id: {
      handler() {
        fetchMeetupById(this.id).then(response => {
          this.title = response.title;
        })
      }
    }
  }
});


const meetupApp = createApp(Meetups).mount('#app');
