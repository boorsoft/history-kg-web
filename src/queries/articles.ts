import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_ARTICLES_URL } from "../constants/constants";
import { Article } from "../types/entities";

export function useArticlesQuery() {
  const { data, isFetching } = useQuery<Article[]>(
    [QUERY_KEYS.ARTICLES],
    () => {
      return axios.get(API_ARTICLES_URL).then(({ data }) => data);
    },
    {
      refetchOnWindowFocus: false,
      cacheTime: 60000,
    }
  );

  return {
    data,
    isLoading: isFetching,
  };
}

export function useArticleQuery(id: number) {
    const { data, isFetching } = useQuery<Article>([QUERY_KEYS.ARTICLE], () => {
      return axios.get(`${API_ARTICLES_URL}/${id}`).then(({ data }) => data);
    }, {
      refetchOnWindowFocus: false,
      cacheTime: 90000
    })
  
    return {
      data,
      isLoading: isFetching
    }
  }
  
