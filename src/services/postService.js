import axios from "axios";
import config from "./config";

export default {
    async getPosts() {
        let result = {};
        await axios.get(`${config.API}${config.POST}`, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => {
            result = res;
        })
        .catch(err => {
            result = err;
        })
        return result;
    },

    async getPostDetail(postId) {
        let result = {};
        await axios.get(`${config.API}${config.POST}/${postId}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => {
            result = res;
        })
        .catch(err => {
            result = err;
        })
        return result;
    }, 

    async getPostComments(postId) {
        let result = {};
        await axios.get(`${config.API}${config.POST}/${postId}${config.COMMENT}`, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => {
            result = res;
        })
        .catch(err => {
            result = err;
        })
        return result;
    }, 

    async getCommentsByPostId(postId) {
        let result = {};
        await axios.get(`${config.API}${config.COMMENT}`, {
            headers: {
                "Content-Type": "application/json",
            },
            params: {
                postId
            }
        }).then(res => {
            result = res;
        })
        .catch(err => {
            result = err;
        })
        return result;
    }, 

    async postPost(post) {
        let result  = {};
        await axios.post(`${config.API}${config.POST}`, post, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => {
            result = response
        }).catch(err => {
            result = err
        })
        return result;
    }
}