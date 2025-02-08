import { createApp } from 'vue';
import { createVfm } from 'vue-final-modal';
import 'vue-final-modal/style.css';
import './style.css';
import App from './App.vue';

const app = createApp(App);

const vfm = createVfm();
app.use(vfm).mount('#app');
