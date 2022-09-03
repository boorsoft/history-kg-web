import { AppState } from "../../types/store/AppState";
import { ActionTypes, AppActions } from "./actionTypes";

export const initialState: AppState = {
    books: {
        data: [],
        isLoading: true,
        currentBook: undefined
    },
    persons: {
        data: [],
        isLoading: true,
        currentPerson: undefined
    },
    quizzes: {
        data: [],
        isLoading: true,
        currentQuiz: undefined
    },
    articles: {
        data: [],
        isLoading: true,
        currentArticle: undefined
    }
}

const appReducer = (state: AppState = initialState, action: AppActions) => {
    switch (action.type) {
        case ActionTypes.SET_BOOKS:
            return { ...state, books: { ...state.books, data: action.payload, isLoading: false } };
        case ActionTypes.SET_CURRENT_BOOK:
            return { ...state, books: {...state.books, currentBook: action.payload, isLoading: false} };
        case ActionTypes.SET_PERSONS:
            return { ...state, persons: {...state.persons, data: action.payload, isLoading: false } };
        case ActionTypes.SET_CURRENT_PERSON:
            return { ...state, persons: { ...state.persons, currentPerson: action.payload, isLoading: false} };
        case ActionTypes.SET_QUIZZES:
            return { ...state, quizzes: {...state.quizzes, data: action.payload, isLoading: false} };
        case ActionTypes.SET_CURRENT_QUIZ:
            return { ...state, quizzes: {...state.quizzes, currentQuiz: action.payload, isLoading: false} };
        case ActionTypes.SET_ARTICLES:
            return { ...state, articles: { ...state.articles, data: action.payload, isLoading: false}};
        case ActionTypes.SET_CURRENT_ARTICLE:
            return { ...state, articles: { ...state.articles, currentArticle: action.payload, isLoading: false }}
        default:
            return {...state}
    }
}

export default appReducer;