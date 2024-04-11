import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
const app = createApp(App);
app.use(router)
app.use(PrimeVue)
app.mount('#app')
