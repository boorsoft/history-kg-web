import { Article, Book, Person, Quiz } from "../../types/store/AppState";

export enum ActionTypes {
  SET_BOOKS = "SET_BOOKS",
  SET_CURRENT_BOOK = "SET_CURRENT_BOOK",
  SET_PERSONS = "SET_PERSONS",
  SET_CURRENT_PERSON = "SET_CURRENT_PERSON",
  SET_QUIZZES = "SET_QUIZZES",
  SET_CURRENT_QUIZ = "SET_CURRENT_QUIZ",
  SET_ARTICLES = "SET_ARTICLES",
  SET_CURRENT_ARTICLE = "SET_CURRENT_ARTICLE"
}

export type ParagraphsAction = {
  type: ActionTypes.SET_BOOKS;
  payload: Book[];
};

export type CurrentParagraphAction = {
  type: ActionTypes.SET_CURRENT_BOOK;
  payload: Book;
};

export type PersonsAction = {
  type: ActionTypes.SET_PERSONS;
  payload: Person[];
};

export type CurrentPersonAction = {
  type: ActionTypes.SET_CURRENT_PERSON;
  payload: Person;
}

export type QuizAction = {
  type: ActionTypes.SET_QUIZZES;
  payload: Quiz[];
};

export type CurrentQuizAction = {
  type: ActionTypes.SET_CURRENT_QUIZ,
  payload: Quiz;
}

export type ArticlesAction = {
  type: ActionTypes.SET_ARTICLES,
  payload: Article[]
}

export type CurrentArticleAction = {
  type: ActionTypes.SET_CURRENT_ARTICLE,
  payload: Article
}

export type AppActions =
  | ParagraphsAction
  | PersonsAction
  | QuizAction
  | ArticlesAction
  | CurrentParagraphAction
  | CurrentPersonAction
  | CurrentQuizAction
  | CurrentArticleAction;
