import axios from "@/config/axios";
export default class AuthService {
    static async login(credentials) {
        // await this.getCsrfCookie()
        return await axios.post(`admin/auth/login`, credentials);
    }
    static forgotPassword() {
        return axios.post(`admin/auth/forgot-password`);
    }
    static logout() {
        return axios.post(`admin/auth/logout`);
    }
    static refreshToken() {
        return axios.post(`admin/auth/token-refresh`);
    }

}