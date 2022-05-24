import { Paragraph, Person, Quiz } from "../../types/store/AppState";

export enum ActionTypes {
  SET_PARAGRAPHS = "SET_PARAGRAPHS",
  SET_CURRENT_PARAGRAPH = "SET_CURRENT_PARAGRAPH",
  SET_PERSONS = "SET_PERSONS",
  SET_CURRENT_PERSON = "SET_CURRENT_PERSON",
  SET_QUIZZES = "SET_QUIZZES",
}

export type ParagraphsAction = {
  type: ActionTypes.SET_PARAGRAPHS;
  payload: Paragraph[];
};

export type CurrentParagraphAction = {
  type: ActionTypes.SET_CURRENT_PARAGRAPH;
  payload: Paragraph;
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

export type AppActions =
  | ParagraphsAction
  | PersonsAction
  | QuizAction
  | CurrentParagraphAction
  | CurrentPersonAction;
