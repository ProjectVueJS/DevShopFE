import axios from "@/config/axios";
export default class UserService {
    static getListUser(data = {}) {
        console.log(data);
        return axios.get(`admin/administration/user/list`);
    }

}