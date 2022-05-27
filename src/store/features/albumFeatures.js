import { ActionType } from "../actionTypes/actionTypes";

export const getAlbums = (albums) => {
    return {
        type: ActionType.GetAlbums,
        payload: albums
    }
}