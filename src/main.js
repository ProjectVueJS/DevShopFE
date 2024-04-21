import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/tailwind.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import { getUser } from './cookie/cookieManager'
const app = createApp(App);
app.config.globalProperties.apiUrl = process.env.VUE_APP_LOCAL_URL;
if (getUser() && getUser().lang) {
    app.config.globalProperties.lang = getUser().lang;
    // console.log(this.lang);
} else {
    app.config.globalProperties.lang = 'vi';
}

app.use(router)
app.use(PrimeVue)
app.mount('#app')
