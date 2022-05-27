import axios from "axios";
import config from "./config";

export default {
    async getAlbums() {
        let result = [];
        await axios.get(`${config.API}${config.ALBUM}`, {
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