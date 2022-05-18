import { AppState } from "../../types/store/AppState";
import { ActionTypes, AppActions } from "./actionTypes";

export const initialState: AppState = {
    paragraphs: {
        data: [],
        isLoading: true,
        currentParagraph: ''
    },
    persons: {
        data: [],
        isLoading: true,
        currentPerson: ''
    },
    quizzes: []
}

const appReducer = (state: AppState = initialState, action: AppActions) => {
    switch (action.type) {
        case ActionTypes.SET_PARAGRAPHS:
            return { ...state, paragraphs: { ...state.paragraphs, data: action.payload, isLoading: false } };
        case ActionTypes.SET_CURRENT_PARAGRAPH:
            return { ...state, paragraphs: {...state.paragraphs, currentParagraph: action.payload, isLoading: false} };
        case ActionTypes.SET_PERSONS:
            return { ...state, persons: {...state.persons, data: action.payload, isLoading: false } };
        case ActionTypes.SET_CURRENT_PERSON:
            return { ...state, persons: { ...state.persons, currentPerson: action.payload, isLoading: false} };
        case ActionTypes.SET_QUIZZES:
            return { ...state, quizzes: action.payload };
        default:
            return {...state}
    }
}

export default appReducer;