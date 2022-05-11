import { createApp } from 'vue';

import App from './App';
import BaseListItem from './components/BaseListItem';

const app = createApp(App);

app.component('base-list-item', BaseListItem);

app.mount('#app');
