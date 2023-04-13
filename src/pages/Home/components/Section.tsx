import React, { useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";

import { ROUTES } from "../../../constants/routes";
import { Article, Book, Person, Quiz } from "../../../types/entities";

import PersonCard from "../../Persons/components/PersonCard";
import BookCard from "./BookCard";
import QuizCard from "../../Quiz/components/QuizCard";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import LoadingSpinner from "../../../components/LoadingSpinner";

import { useBooksQuery } from "../../../queries/books";
import { usePersonsQuery } from "../../../queries/persons";
import { useArticlesQuery } from "../../../queries/articles";
import { useQuizzesQuery } from "../../../queries/quiz";

type Props = {
  title: string;
  scroll: "horizontal" | "vertical";
  type: "books" | "quiz" | "persons" | "articles";
  route: string;
};

const SectionContent = ({ scroll, type }: Props) => {
  const { data: books, isLoading: isBooksLoading } = useBooksQuery();
  const { data: persons, isLoading: isPersonsLoading } = usePersonsQuery();
  const { data: quizzes, isLoading: isQuizzesLoading } = useQuizzesQuery();
  const { data: articles, isLoading: isArticlesLoading } = useArticlesQuery();

  if (type === "books") {
    return (
      <ScrollContainer scroll={scroll}>
        {isBooksLoading && <LoadingSpinner />}
        {!isBooksLoading &&
          books &&
          books.map((book: Book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              cityAndYear={`${book.city} ${book.year}`}
              route={`${ROUTES.BOOKS}/${book.id}`}
            />
          ))}
      </ScrollContainer>
    );
  } else if (type === "persons") {
    return (
      <ScrollContainer scroll={scroll}>
        {isPersonsLoading && <LoadingSpinner />}
        {!isPersonsLoading &&
          persons &&
          persons.map((person: Person) => (
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
        {isQuizzesLoading && <LoadingSpinner />}
        {!isQuizzesLoading &&
          quizzes &&
          quizzes.map((quiz: Quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              route={`${ROUTES.QUIZ}/${quiz.id}`}
            />
          ))}
      </ScrollContainer>
    );
  } else if (type === "articles") {
    return (
      <ScrollContainer scroll={scroll}>
        {isArticlesLoading && <LoadingSpinner />}
        {!isArticlesLoading &&
          articles &&
          articles.map((article: Article) => (
            <ArticleCard
              title={article.title}
              text={article.text}
              key={article.id}
              route={`${ROUTES.ARTICLES}/${article.id}`}
            />
          ))}
      </ScrollContainer>
    );
  } else {
    return <></>;
  }
};

const Section = ({ scroll, title, type, route }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <ViewAllButton onClick={() => navigate(route)}>
          <ViewAllButtonText>Показать все</ViewAllButtonText>
          <ViewAllButtonIcon />
        </ViewAllButton>
      </SectionHeader>
      <SectionContent scroll={scroll} type={type} title={title} route={route} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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
  margin-left: 20px;
`;

const ViewAllButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-right: 7px;
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
  height: auto;
  display: flex;
  flex-direction: ${({ scroll }) => (scroll === "vertical" ? "column" : "row")};
  overflow-x: ${({ scroll }) => scroll === "horizontal" && "scroll"};
  overflow-y: ${({ scroll }) => scroll === "vertical" && "scroll"};
  padding: 15px 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &:nth-child(2) {
    padding-inline-start: 20px;
  }
`;

export default Section;
