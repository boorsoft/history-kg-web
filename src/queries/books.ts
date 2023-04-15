import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_BOOKS_URL } from "../constants/constants";
import { Book } from "../types/entities";
import { QUERY_KEYS } from "../constants/queryKeys";

interface BooksQueryProps {
  params?: {
    limit?: number;
  };
}

export function useBooksQuery(queryParams?: BooksQueryProps) {
  const { data, isFetching } = useQuery<Book[]>(
    [QUERY_KEYS.BOOKS, queryParams?.params?.limit],
    () => {
      return axios
        .get(API_BOOKS_URL, { params: { limit: queryParams?.params?.limit } })
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

export function useBookQuery(id: number) {
  const { data, isFetching } = useQuery<Book>(
    [QUERY_KEYS.BOOK, id],
    () => {
      return axios.get(`${API_BOOKS_URL}/${id}`).then(({ data }) => data);
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
