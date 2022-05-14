import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state, getters) {
      const normalizedCounter = getters.finalCounter;
      if (normalizedCounter > 100) return 100;
      if (normalizedCounter < 0) return 0;
      return normalizedCounter;
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount('#app');
