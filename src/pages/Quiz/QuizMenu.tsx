import React from "react";
import { FC } from "react";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ROUTES } from "../../constants/routes";
import { Quiz } from "../../types/entities";
import { Container } from "../Home/Home";
import QuizCard from "./components/QuizCard";
import { useQuizzesQuery } from "../../queries/quiz";

const QuizMenu: FC = () => {
  const { data: quizzes, isLoading } = useQuizzesQuery();

  return (
    <>
      <Header title="Тестирование" />
      <Container>
        {isLoading && <LoadingSpinner />}
        {!isLoading &&
          quizzes &&
          quizzes.map((quiz: Quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              route={`${ROUTES.QUIZ}/${quiz.id}`}
            />
          ))}
      </Container>
    </>
  );
};

export default QuizMenu;
