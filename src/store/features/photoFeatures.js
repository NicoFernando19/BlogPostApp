import { ActionType } from "../actionTypes/actionTypes";

export const getPhotos = (photos) => {
    return {
        type: ActionType.GetPhotos,
        payload: photos
    }
}