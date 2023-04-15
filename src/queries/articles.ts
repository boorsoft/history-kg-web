import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_ARTICLES_URL } from "../constants/constants";
import { Article } from "../types/entities";
import { QUERY_KEYS } from "../constants/queryKeys";

interface ArticlesQueryProps {
  params?: {
    limit?: number;
  };
}

export function useArticlesQuery(queryParams?: ArticlesQueryProps) {
  const { data, isFetching } = useQuery<Article[]>(
    [QUERY_KEYS.ARTICLES, queryParams?.params?.limit],
    () => {
      return axios
        .get(API_ARTICLES_URL, {
          params: { limit: queryParams?.params?.limit },
        })
        .then(({ data }) => data);
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 60000,
    }
  );

  return {
    data,
    isLoading: isFetching,
  };
}

export function useArticleQuery(id: number) {
  const { data, isFetching } = useQuery<Article>(
    [QUERY_KEYS.ARTICLE, id],
    () => {
      return axios.get(`${API_ARTICLES_URL}/${id}`).then(({ data }) => data);
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 90000,
    }
  );

  return {
    data,
    isLoading: isFetching,
  };
}
