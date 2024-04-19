import axios from "@/config/axios";
export default class AuthService {
    static login(data) {
        return axios.post(`/auth/login`, data);
    }
    static forgotPassword(data) {
        return axios.post(`/auth/forgot-password`, data);
    }
    static logout() {
        return axios.post(`/auth/logout`, data);
    }
    static refreshToken() {
        return axios.post(`/auth/token-refresh`, data);
    }

}