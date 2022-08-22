import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";

import { ROUTES } from "../../../constants/routes";
import {
  fetchBooks,
  fetchPersons,
  fetchQuizzes,
} from "../../../store/app/actionCreators";
import { AppDispatch, RootState } from "../../../store/store";
import { Book, Person, Quiz } from "../../../types/store/AppState";

import PersonCard from "../../Persons/components/PersonCard";
import BookCard from "./BookCard";
import QuizCard from "../../Quiz/components/QuizCard";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  scroll: "horizontal" | "vertical";
  type: "books" | "quiz" | "persons" | "documents";
  route?: string;
  maxLength?: number;
};

const SectionContent = ({ scroll, type }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const { persons, quizzes, books } = useSelector(
    (state: RootState) => state.app
  );

  const getBooks = bindActionCreators(fetchBooks, dispatch);
  const getQuizzes = bindActionCreators(fetchQuizzes, dispatch);
  const getPersons = bindActionCreators(fetchPersons, dispatch);

  useEffect(() => {
    if (type === "persons") getPersons();
    else if (type === "quiz") getQuizzes();
    else if (type === "books") getBooks();
  }, []);

  if (type === "books") {
    return (
      <ScrollContainer scroll={scroll}>
        {books.data.map((book: Book) => (
          <BookCard
            title={book.title}
            author={book.author}
            cityAndYear={`${book.city} ${book.year}`}
            route={ROUTES.BOOK}
          />
        ))}
      </ScrollContainer>
    );
  } else if (type === "persons") {
    return (
      <ScrollContainer scroll={scroll}>
        {!persons.isLoading &&
          persons.data.map((person: Person) => (
            <PersonCard
              key={person.id}
              person={person}
              route={`${ROUTES.PERSONS}/${person.id}`}
            />
          ))}
      </ScrollContainer>
    );
  } else if (type === "quiz") {
    return (
      <ScrollContainer scroll={scroll}>
        {!quizzes.isLoading &&
          quizzes.data.map((quiz: Quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              route={`${ROUTES.QUIZ}/${quiz.id}`}
            />
          ))}
      </ScrollContainer>
    );
  } else {
    return <></>;
  }
};

const Section = ({ scroll, title, type, route, maxLength = 10 }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {route && (
          <ViewAllButton onClick={() => navigate(route)}>
            <ViewAllButtonText>Показать все</ViewAllButtonText>
            <ViewAllButtonIcon />
          </ViewAllButton>
        )}
      </SectionHeader>
      <SectionContent scroll={scroll} type={type} title={title} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 5px;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SectionTitle = styled.div`
  color: var(--text-color);
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
`;

const ViewAllButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const ViewAllButtonText = styled.h4`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
`;

const ViewAllButtonIcon = styled(MdArrowForwardIos)`
  color: var(--text-color);
  margin-left: 6px;
`;

const ScrollContainer = styled.div<{ scroll: string }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ scroll }) => (scroll === "vertical" ? "column" : "row")};
  overflow-x: ${({ scroll }) => scroll === "horizontal" && "scroll"};
  overflow-y: ${({ scroll }) => scroll === "vertical" && "scroll"};
  padding: 15px 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Section;
