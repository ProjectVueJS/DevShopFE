import axios from "@/config/axios";
export default class AuthService {
    static login(credentials) {
        return axios.post(`/auth/login`, credentials);
    }
    static forgotPassword() {
        return axios.post(`/auth/forgot-password`);
    }
    static logout() {
        return axios.post(`/auth/logout`);
    }
    static refreshToken() {
        return axios.post(`/auth/token-refresh`);
    }

}