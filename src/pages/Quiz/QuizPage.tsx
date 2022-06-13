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
import QuizFinishPopup from "./components/QuizFinishPopup";

const QuizPage: FC = () => {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const { currentQuiz, isLoading } = useSelector(
    (state: RootState) => state.app.quizzes
  );
  const questions = currentQuiz?.questions;

  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [answersDisabled, setAnswersDisabled] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [hasMultipleCorrectAnswers, setHasMultipleCorrectAnswers] =
    useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
  const [confirmed, setConfirmed] = useState(false);

  const fetchQuiz = bindActionCreators(fetchQuizById, dispatch);

  useEffect(() => {
    id && fetchQuiz(+id);
  }, [])

  useEffect(() => {
    setHasMultipleCorrectAnswers(checkIfHasMultipleCorrectAnswers());
  }, [questions]);

  const checkIfHasMultipleCorrectAnswers = () => {
    let correctCount = 0;

    questions &&
      questions[currentQuestionIdx].answers.forEach((answer) => {
        if (answer.isCorrectAnswer) correctCount = correctCount + 1;
      });

    if (correctCount > 1) return true;
    else return false;
  };

  const selectMultipleAnswers = (answer: Answer) => {
    if (!selectedAnswers.includes(answer)) {
      setSelectedAnswers((sa) => [...sa, answer]);
    } else {
      selectedAnswers.splice(selectedAnswers.indexOf(answer), 1);
    }
  };

  const nextQuestion = () => {
    if (questions && currentQuestionIdx >= questions.length - 1) return;

    setCurrentQuestionIdx((index) => (index += 1));
    setHasMultipleCorrectAnswers(checkIfHasMultipleCorrectAnswers());
    setAnswersDisabled(false);
    setIsButtonActive(false);
    setConfirmed(false);
    setSelectedAnswers([]);
  };

  const confirm = () => {
    let allCorrect = true;

    selectedAnswers.forEach((sa) => {
      if (!sa.isCorrectAnswer) allCorrect = false;
    });

    if (allCorrect) setCorrectAnswersCount((count) => (count += 1));

    setConfirmed(true);
    setAnswersDisabled(true);
  };

  const onAnswerClick = (answer: Answer) => {
    if (answersDisabled) return;

    setIsButtonActive(true);

    if (!hasMultipleCorrectAnswers) {
      if (answer.isCorrectAnswer)
        setCorrectAnswersCount((count) => (count += 1));
      setAnswersDisabled(true);
      setConfirmed(true);
    } else {
      selectMultipleAnswers(answer);
    }
  };

  const finishQuiz = () => {
    setQuizFinished(true);
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
                confirmed={confirmed}
                hasMultipleCorrectAnswers={hasMultipleCorrectAnswers}
                onClick={() => onAnswerClick(answer)}
                disabled={answersDisabled}
              />
            ))}
          </AnswersContainer>
          {isButtonActive &&
            (questions && currentQuestionIdx < questions.length - 1 ? (
              confirmed ? (
                <QuizButton text="Дальше" onClick={nextQuestion} />
              ) : (
                <QuizButton text="Подтвердить" onClick={confirm} />
              )
            ) : confirmed ? (
              <QuizButton text="Завершить" onClick={finishQuiz} />
            ) : (
              <QuizButton text="Подтвердить" onClick={confirm} />
            ))}
          {quizFinished && (
            <QuizFinishPopup
              correctAnswersCount={correctAnswersCount}
              quizLength={questions.length}
            />
          )}
        </>
      )}
    </Container>
  );
};

const AnswersContainer = styled.div`
  padding: 5px;
`;

export default QuizPage;
