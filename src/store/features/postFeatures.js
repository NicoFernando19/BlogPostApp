import { ActionType } from "../actionTypes/actionTypes";

export const getPosts = (posts) => {
    return {
        type: ActionType.GetPosts,
        payload: posts
    }
}

export const addPost = (post) => {
    return {
        type: ActionType.AddPost,
        payload: post
    }
}

export const getPostDetail = (post) => {
    return {
        type: ActionType.SelectedPost,
        payload: post
    }
}

export const unselectedPostDetail = (post) => {
    return {
        type: ActionType.UnselectedPost,
        payload: post
    }
}