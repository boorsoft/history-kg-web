import { Dispatch } from "react";
import { ActionTypes, AuthAction } from "./actionTypes";

export const login = () => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: ActionTypes.SET_LOGGED_IN,
            payload: true
        })
    }
}