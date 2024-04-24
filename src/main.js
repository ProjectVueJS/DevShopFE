import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { getUser } from './cookie/cookieManager'
// 
import AlertNotifice from "@/common/AlertNotifice.vue";
import LoadingVue from '@/common/LoadingVue.vue'
// 
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
// 
const app = createApp(App);
app.config.globalProperties.apiUrl = process.env.VUE_APP_LOCAL_URL;
if (getUser() && getUser().lang) {
    app.config.globalProperties.lang = getUser().lang;
    // console.log(this.lang);
} else {
    app.config.globalProperties.lang = 'vi';
}
app.component('AlertNotifice', AlertNotifice)
app.component('LoadingVue', LoadingVue)
// app.component('LoadingVue', LoadingVue)
app.use(router)
app.use(PrimeVue)
app.mount('#app')
