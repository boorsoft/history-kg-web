import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

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

    const { currentQuiz, isLoading } = useSelector((state: RootState) => state.app.quizzes);
    const questions = currentQuiz?.questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
    const [isButtonActive, setIsButtonActive] = useState(false);

    const fetchQuiz = bindActionCreators(fetchQuizById, dispatch);

    useEffect(() => {
        id && fetchQuiz(+id);
    }, [])

    const nextQuestion = () => {
        if (questions && currentQuestionIdx > questions.length) return;

        setCurrentQuestionIdx((index) => index++)
    }

    const onAnswerClick = (answer: Answer) => {
        setIsButtonActive(true);

        if (answer.isCorrectAnswer) {

        }
    }

    return (
        <Container>
            {isLoading && <LoadingSpinner />}
            {!isLoading && currentQuiz && questions && (
                <>
                    <QuestionCard question={questions[currentQuestionIdx]} quizLengthText={`${currentQuestionIdx + 1}/${questions.length}`} />
                    <AnswersContainer>
                        {questions[currentQuestionIdx].answers.map((answer: Answer) => (
                            <AnswerCard answer={answer} onClick={() => onAnswerClick(answer)} />
                        ))}
                    </AnswersContainer>
                    {isButtonActive && <QuizButton text="Дальше" onClick={nextQuestion} />}
                </>
            )}
        </Container>
    )
}

const AnswersContainer = styled.div`
    padding: 5px;
`

export default QuizPage;