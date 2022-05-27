import { ActionType } from "../actionTypes/actionTypes";

export const getUsers = (users) => {
    return {
        type: ActionType.GetUsers,
        payload: users
    }
}