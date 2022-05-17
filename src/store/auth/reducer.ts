import { AuthState } from "../../types/store/AuthState";
import { ActionTypes, AuthAction } from "./actionTypes";

export const initialState: AuthState = {
    loggedIn: false
}

const authReducer = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case ActionTypes.SET_LOGGED_IN:
            return { ...state, loggedIn: action.payload}
    }
}

export default authReducer;