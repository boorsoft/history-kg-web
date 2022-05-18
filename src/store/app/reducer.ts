import { AppState } from "../../types/store/AppState";
import { ActionTypes, AppActions } from "./actionTypes";

export const initialState: AppState = {
    paragraphs: {
        data: [],
        isLoading: true,
        currentParagraph: ''
    },
    persons: [],
    quizzes: []
}

const appReducer = (state: AppState = initialState, action: AppActions) => {
    switch (action.type) {
        case ActionTypes.SET_PARAGRAPHS:
            return { ...state, paragraphs: { ...state.paragraphs, data: action.payload } };
        case ActionTypes.SET_CURRENT_PARAGRAPH:
            return { ...state, paragraphs: {...state.paragraphs, currentParagraph: action.payload} };
        case ActionTypes.SET_PERSONS:
            return { ...state, persons: action.payload };
        case ActionTypes.SET_QUIZZES:
            return { ...state, quizzes: action.payload };
        default:
            return {...state}
    }
}

export default appReducer;