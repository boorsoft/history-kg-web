import axios from "axios";
import { Dispatch } from "react";
import { API_PARAGRAPHS_URL } from "../../constants/constants";
import { ActionTypes, AppActions } from "./actionTypes";

export const fetchParagraphs = () => {
    return (dispatch: Dispatch<AppActions>) => {
        return axios.get(API_PARAGRAPHS_URL).then(({data}) => {
            return dispatch({
                type: ActionTypes.SET_PARAGRAPHS,
                payload: data
            })
        })   
    }
}

export const fetchParagraphById = (id: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        return axios.get(`${API_PARAGRAPHS_URL}/${id}`).then(({data}) => {
            return dispatch({
                type: ActionTypes.SET_CURRENT_PARAGRAPH,
                payload: data
            })
        })
    }
}