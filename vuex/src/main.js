import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

import counterModule from './store-modules/counter-module';
import authModule from './store-modules/auth-module';

const store = createStore({
  modules: {
    counter: counterModule,
    authentication: authModule,
  },
});

const app = createApp(App);

app.use(store);
app.mount('#app');
