import { getToken } from "@/cookie/cookieManager";
import axios from "axios";

axios.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        if (error.response) {
            return Promise.reject(error.response)
        } else {
            return Promise.reject(error)
        }
    }
)
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_LOCAL_URL ? process.env.VUE_APP_LOCAL_URL : 'http://app.local/api/';
// console.log(process.env.VUE_APP_LOCAL_URL);
axios.defaults.headers.common['Content-Type'] = 'application/json'

if (getToken()) {
    axios.defaults.headers.common['Authorization'] = getToken()
}
axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;
export default axios;