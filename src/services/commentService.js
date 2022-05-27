import axios from "axios";
import config from "../config";

export default {
    async getComments() {
        let result = {};
        await axios.get(`${config.API}${config.COMMENT}`, {
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