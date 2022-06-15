import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ROUTES } from "../../constants/routes";
import { fetchQuizzes } from "../../store/app/actionCreators";
import { AppDispatch, RootState } from "../../store/store";
import { Quiz } from "../../types/store/AppState";
import { Container } from "../Home/Home";
import QuizCard from "./components/QuizCard";

const QuizMenu: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    quizzes,
    quizzes: { isLoading },
  } = useSelector((state: RootState) => state.app);

  const getQuizzes = bindActionCreators(fetchQuizzes, dispatch);

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <>
      <Header title="Тестирование" />
      <Container>
        {isLoading && <LoadingSpinner />}
        {!isLoading &&
          quizzes.data.map((quiz: Quiz) => (
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
