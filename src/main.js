import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/normalize.css';
import 'vant/lib/index.css';
import vant from 'vant';
import pinia from './store/index';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App);

pinia.use(piniaPluginPersistedstate);
app.use(router).use(vant).use(pinia).mount('#app');
