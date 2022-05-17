import { AppState } from "../../types/store/AppState";
import { ActionTypes, AppActions } from "./actionTypes";

export const initialState: AppState = {
    paragraphs: [],
    persons: [],
    quizzes: []
}

const appReducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
        case ActionTypes.SET_PARAGRAPHS:
            return { ...state, paragraphs: action.payload };
        case ActionTypes.SET_PERSONS:
            return { ...state, persons: action.payload };
        case ActionTypes.SET_QUIZZES:
            return { ...state, quizzes: action.payload };
    }
}

export default appReducer;