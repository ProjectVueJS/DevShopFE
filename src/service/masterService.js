import axios from "@/config/axios";

export default class MasterService {
    static getCsrfCookie() {
        return axios.get(`/sanctum/csrf-cookie`);
    }
    
}