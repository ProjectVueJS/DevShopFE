import axios from "@/config/axios";
export default class ConfigService {
    static setUserLanguage(lang) {
        return axios.put(`api/config/set-language`, { lang: lang });
    }
    static getMenu(lang) {
        // console.log(lang);
        return axios.get(`api/config/get-menu?lang=${lang}`);
    }

}