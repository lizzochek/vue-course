import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload.value;
    },
    logIn(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    increment(context, payload) {
      setTimeout(() => {
        context.commit('increment', payload);
      }, 2000);
    },
    logIn(context) {
      context.commit('logIn');
    },
    logOut(context) {
      context.commit('logOut');
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
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount('#app');
