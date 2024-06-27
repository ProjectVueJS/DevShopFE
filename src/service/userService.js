import axios from "@/config/axios";
export default class UserService {
    static getListUser(query = '', sort = '', page = 1, limit = 10) {
        let ext = ''
        // if (data.sort) {
        //     ext += `sort[${data.sort[0]}]=${data.sort[1]}`    
        // }
        if (query) {
            ext += query;
        }
        if (sort) {
            ext += query ? `&${sort}` : sort;
        }
        ext += `&page=${page}&limit=${limit}`;
        // console.log(ext);
        return axios.get(`admin/user/administration/user/list?${ext}`);
    }

    static createUser(data) {
        return axios.post(`admin/user/administration/user/list/new-user`, data);
    }
}