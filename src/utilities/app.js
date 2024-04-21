import { getExpiredLogin, getUser, removeCookieLogin, setCookie } from "@/cookie/cookieManager";
// import router from "@/router";
import AuthService from "@/service/authService";
import configService from "@/service/configService"
export class AppAction {
    constructor() {
        
    }
    static async setLanguage(lang) {
        // console.log(lang);
        try {
            await configService.setUserLanguage(lang) //update language of user db
            let user = getUser()
            user.lang = lang
            setCookie('user', user, parseInt(getExpiredLogin()))
            location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    static async logout() {
        try {
            await AuthService.logout() //logout be add token to blacklist
            removeCookieLogin() //logout remove token login
            location.href = '/admin';
            // router.push('/admin')
        } catch (error) {
            console.error(error);
        }
    }


    
}
