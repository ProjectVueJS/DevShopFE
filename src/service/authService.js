import axios from "@/config/axios";
import MasterService from "./masterService";
export default class AuthService extends MasterService {
    constructor() {
        super()
    }
    static async login(credentials) {
        // await this.getCsrfCookie()
        return await axios.post(`auth/login`, credentials);
    }
    static forgotPassword() {
        return axios.post(`auth/forgot-password`);
    }
    static logout() {
        return axios.post(`auth/logout`);
    }
    static refreshToken() {
        return axios.post(`auth/token-refresh`);
    }

}