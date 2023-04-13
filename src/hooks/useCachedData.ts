import { queryClient } from "../App";
import { QUERY_KEYS } from "../constants/queryKeys";
import { Article, Book, Person, Quiz } from "../types/entities";

export function useArticlesCached() {
  return queryClient.getQueryData<Article[]>([QUERY_KEYS.ARTICLES]);
}

export function useBooksCached() {
  return queryClient.getQueryData<Book[]>([QUERY_KEYS.BOOKS]);
}

export function usePersonsCached() {
  return queryClient.getQueryData<Person[]>([QUERY_KEYS.PERSONS]);
}

export function useQuizzesCached() {
  return queryClient.getQueryData<Quiz[]>([QUERY_KEYS.QUIZZES]);
}
