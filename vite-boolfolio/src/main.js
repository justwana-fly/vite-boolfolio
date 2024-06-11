import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import './style.scss';
import router from './router';

const app = createApp(App);

// Configura axios come proprietà globale
app.config.globalProperties.$axios = axios;

app.use(router);

app.mount('#app');
