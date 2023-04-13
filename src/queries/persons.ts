import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_PERSONS_URL } from "../constants/constants";
import { Person } from "../types/entities";
import { QUERY_KEYS } from "../constants/queryKeys";

export function usePersonsQuery() {
  const { data, isFetching } = useQuery<Person[]>(
    [QUERY_KEYS.PERSONS],
    () => {
      return axios.get(API_PERSONS_URL).then(({ data }) => data);
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

export function usePersonQuery(id: number) {
  const { data, isFetching } = useQuery<Person>(
    [QUERY_KEYS.PERSON],
    () => {
      return axios.get(`${API_PERSONS_URL}/${id}`).then(({ data }) => data);
    },
    {
      refetchOnWindowFocus: false,
      cacheTime: 90000,
    }
  );

  return {
    data,
    isLoading: isFetching,
  };
}
