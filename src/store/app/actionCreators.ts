import axios from "axios";
import { Dispatch } from "react";

import { API_PARAGRAPHS_URL, API_PERSONS_URL, API_QUIZ_URL } from "../../constants/constants";
import { ActionTypes, AppActions } from "./actionTypes";

export const fetchBooks = () => {
    return async (dispatch: Dispatch<AppActions>) => {
        return axios.get(API_PARAGRAPHS_URL).then(({data}) => {
            return dispatch({
                type: ActionTypes.SET_BOOKS,
                payload: data
            })
        })   
    }
}

export const fetchBookById = (id: number) => {
    return async (dispatch: Dispatch<AppActions>) => {
        return axios.get(`${API_PARAGRAPHS_URL}/${id}`).then(({data}) => {
            return dispatch({
                type: ActionTypes.SET_CURRENT_BOOK,
                payload: data
            })
        })
    }
}

export const fetchPersons = () => {
    return async (dispatch: Dispatch<AppActions>) => {
        return axios.get(API_PERSONS_URL).then(({data}) => {
            return dispatch({
                type: ActionTypes.SET_PERSONS,
                payload: data
            })
        })
    }
}

export const fetchPersonById = (id: number) => {
    return async (dispatch: Dispatch<AppActions>) => {
        return axios.get(`${API_PERSONS_URL}/${id}`).then(({data}) => {
            return dispatch({
                type: ActionTypes.SET_CURRENT_PERSON,
                payload: data
            })
        })
    }
}

export const fetchQuizzes = () => {
    return async (dispatch: Dispatch<AppActions>) => {
        return axios.get(API_QUIZ_URL).then(({data}) => {
            return dispatch({
                type: ActionTypes.SET_QUIZZES,
                payload: data
            })
        })
    }
}

export const fetchQuizById = (id: number) => {
    return async (dispatch: Dispatch<AppActions>) => {
        return axios.get(`${API_QUIZ_URL}/${id}`).then(({data}) => {
            return dispatch({
                type: ActionTypes.SET_CURRENT_QUIZ,
                payload: data
            })
        })
    }
}