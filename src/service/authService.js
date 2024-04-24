import axios from "@/config/axios";
import MasterService from "./masterService";
export default class AuthService extends MasterService {
    constructor() {
        super()
    }
    static async login(credentials) {
        await this.getCsrfCookie()
        return await axios.post(`api/auth/login`, credentials);
    }
    static forgotPassword() {
        return axios.post(`api/auth/forgot-password`);
    }
    static logout() {
        return axios.post(`api/auth/logout`);
    }
    static refreshToken() {
        return axios.post(`api/auth/token-refresh`);
    }

}