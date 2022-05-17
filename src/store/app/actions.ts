import axios from "axios";
import { Dispatch } from "react";
import { API_PARAGRAPHS_URL } from "../../constants/constants";
import { ActionTypes, AppActions } from "./actionTypes";

export const fetchParagraphs = async () => {
    return (dispatch: Dispatch<AppActions>) => {
        return axios.get(API_PARAGRAPHS_URL).then(({data}) => {
            return dispatch({
                type: ActionTypes.SET_PARAGRAPHS,
                payload: data
            })
        })   
    }
}