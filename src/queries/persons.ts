import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_PERSONS_URL } from "../constants/constants";
import { Person } from "../types/entities";
import { QUERY_KEYS } from "../constants/queryKeys";

interface PersonsQueryProps {
  params?: {
    limit?: number;
  };
}

export function usePersonsQuery(queryParams?: PersonsQueryProps) {
  const { data, isFetching } = useQuery<Person[]>(
    [QUERY_KEYS.PERSONS, queryParams?.params?.limit],
    () => {
      return axios
        .get(API_PERSONS_URL, { params: { limit: queryParams?.params?.limit } })
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

export function usePersonQuery(id: number) {
  const { data, isFetching } = useQuery<Person>(
    [QUERY_KEYS.PERSON, id],
    () => {
      return axios.get(`${API_PERSONS_URL}/${id}`).then(({ data }) => data);
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
