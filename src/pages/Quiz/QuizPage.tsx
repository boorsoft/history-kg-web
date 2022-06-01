import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import LoadingSpinner from "../../components/LoadingSpinner";
import { fetchQuizById } from "../../store/app/actionCreators";
import { AppDispatch, RootState } from "../../store/store";
import { Answer } from "../../types/store/AppState";
import { Container } from "../Home/Home";

import AnswerCard from "./components/AnswerCard";
import QuestionCard from "./components/QuestionCard";
import QuizButton from "./components/QuizButton";

const QuizPage: FC = () => {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const { currentQuiz, isLoading } = useSelector(
    (state: RootState) => state.app.quizzes
  );
  const questions = currentQuiz?.questions;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [answersDisabled, setAnswersDisabled] = useState(false);

  const fetchQuiz = bindActionCreators(fetchQuizById, dispatch);

  useEffect(() => {
    id && fetchQuiz(+id);
  }, []);

  const nextQuestion = () => {
    if (questions && currentQuestionIdx >= questions.length - 1) return;

    setCurrentQuestionIdx((index) => (index += 1));
    setAnswersDisabled(false);
  };

  const onAnswerClick = (answer: Answer) => {
    if (answersDisabled) return;

    setIsButtonActive(true);
    setAnswersDisabled(true);
  };

  return (
    <Container>
      {isLoading && <LoadingSpinner />}
      {!isLoading && currentQuiz && questions && (
        <>
          <QuestionCard
            question={questions[currentQuestionIdx]}
            quizLengthText={`${currentQuestionIdx + 1}/${questions.length}`}
          />
          <AnswersContainer>
            {questions[currentQuestionIdx].answers.map((answer: Answer) => (
              <AnswerCard
                key={answer.id}
                answer={answer}
                onClick={() => onAnswerClick(answer)}
                disabled={answersDisabled}
              />
            ))}
          </AnswersContainer>
          {isButtonActive &&
            (questions && currentQuestionIdx < questions.length - 1 ? (
              <QuizButton text="Дальше" onClick={nextQuestion} />
            ) : (
              <QuizButton text="Завершить" onClick={nextQuestion} />
            ))}
        </>
      )}
    </Container>
  );
};

const AnswersContainer = styled.div`
  padding: 5px;
`;

export default QuizPage;
