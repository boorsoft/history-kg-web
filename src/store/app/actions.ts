import axios from "axios";
import { API_PARAGRAPHS_URL } from "../../constants/constants";

export const fetchParagraphs = async () => {
    const { data } = await axios.get(API_PARAGRAPHS_URL);
    console.log(data);
    return data;
}