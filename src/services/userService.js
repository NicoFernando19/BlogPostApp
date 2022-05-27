import axios from "axios";
import config from "./config";

export default {
    async getUsers() {
        let result = {};
        await axios.get(`${config.API}${config.USER}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            result = res;
        }).catch(err => {
            result = err;
        })
        return result;
    },

    async getUserDetail(userId) {
        let result = {};
        await axios.get(`${config.API}${config.USER}/${userId}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            result = res;
        }).catch(err => {
            result = err;
        })
        return result;
    }
}