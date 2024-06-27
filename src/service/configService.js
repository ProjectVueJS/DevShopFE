import axios from "@/config/axios";
export default class ConfigService {
    static setUserLanguage(lang) {
        return axios.put(`admin/config/set-language`, { lang: lang });
    }
    static getMenu() {
        return axios.get(`admin/config/get-menu`);
    }

}