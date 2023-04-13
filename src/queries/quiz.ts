import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_QUIZ_URL } from "../constants/constants";
import { Quiz } from "../types/entities";
import { QUERY_KEYS } from "../constants/queryKeys";

export function useQuizzesQuery() {
  const { data, isFetching } = useQuery<Quiz[]>(
    [QUERY_KEYS.QUIZZES],
    () => {
      return axios.get(API_QUIZ_URL).then(({ data }) => data);
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

export function useQuizQuery(id: number) {
  const { data, isFetching } = useQuery<Quiz>(
    [QUERY_KEYS.QUIZ],
    () => {
      return axios.get(`${API_QUIZ_URL}/${id}`).then(({ data }) => data);
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
