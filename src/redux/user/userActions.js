import { ADD_USER, REMOVE_USER, RESET_USER } from "./userTypes"

export const addUser = (name) => {
    return {
        type: ADD_USER,
        payload: name
    }
}

export const removeUser = (name) => {
    return {
        type: REMOVE_USER,
        payload: name
    }
}

export const resetUser = () => {
    return {
        type: RESET_USER
    }
}