import axios from "@/config/axios";
export default class ConfigService {
    static setUserLanguage(lang) {
        return axios.put(`config/set-language`, { lang: lang });
    }
    static getMenu() {
        return axios.get(`config/get-menu`);
    }

}