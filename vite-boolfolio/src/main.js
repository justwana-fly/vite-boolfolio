import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import './style.scss';

const app = createApp(App);

// Configura axios come proprietà globale
app.config.globalProperties.$axios = axios;

app.mount('#app');
