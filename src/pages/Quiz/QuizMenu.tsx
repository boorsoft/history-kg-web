import React from "react";
import { FC } from "react";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ROUTES } from "../../constants/routes";
import { Quiz } from "../../types/entities";
import { Container } from "../Home/Home";
import QuizCard from "./components/QuizCard";
import { useQuizzesCached } from "../../hooks/useCachedData";

const QuizMenu: FC = () => {
  const quizzes = useQuizzesCached();

  return (
    <>
      <Header title="Тестирование" />
      <Container>
        {quizzes &&
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
