import { ActionType } from "../actionTypes/actionTypes";


export const postReducer = (state = { posts: [] }, { type, payload }) => {
    switch (type) {
        case ActionType.GetPosts:
            return {
                ...state,
                posts: payload
            };
        case ActionType.AddPost:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    payload
                ]
            };
        default:
            return state;
    }
}

export const postDetailReducer = (state = { }, { type, payload }) => {
    switch (type) {
        case ActionType.SelectedPost:
            return {
                ...state,
                ...payload
            };
        case ActionType.UnselectedPost:
            return state;
        default:
            return state;
    }
}

export const userReducer = (state = { users: [] }, { type, payload }) => {
    switch (type) {
        case ActionType.GetUsers:
            return {
                ...state,
                users: payload
            };
        default:
            return state;
    }
}

export const albumReducer = (state = { albums: [] }, { type, payload }) => {
    switch (type) {
        case ActionType.GetAlbums:
            return {
                ...state,
                albums: payload
            };
        default:
            return state;
    }
}

export const photoReducer = (state = { photos: [] }, { type, payload }) => {
    switch (type) {
        case ActionType.GetPhotos:
            return {
                ...state,
                photos: payload
            };
        default:
            return state;
    }
}