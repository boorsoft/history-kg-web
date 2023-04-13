import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_BOOKS_URL } from "../constants/constants";
import { Book } from "../types/entities";

export function useBooksQuery() {
  const { data, isFetching } = useQuery<Book[]>(
    [QUERY_KEYS.BOOKS],
    () => {
      return axios.get(API_BOOKS_URL).then(({ data }) => data);
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

export function useBookQuery(id: number) {
  const { data, isFetching } = useQuery<Book>([QUERY_KEYS.BOOK], () => {
    return axios.get(`${API_BOOKS_URL}/${id}`).then(({ data }) => data);
  }, {
    refetchOnWindowFocus: false,
    cacheTime: 90000
  })

  return {
    data,
    isLoading: isFetching
  }
}
