import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
import LoadingSpinner from "../../components/LoadingSpinner";
import { fetchQuizById } from "../../store/app/actionCreators";
import { AppDispatch, RootState } from "../../store/store";
import { Answer, Quiz } from "../../types/store/AppState";
import { Container } from "../Home/Home";
import AnswerCard from "./components/AnswerCard";
import QuestionCard from "./components/QuestionCard";

const QuizPage: FC = () => {
    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    const { currentQuiz, isLoading } = useSelector((state: RootState) => state.app.quizzes);
    const questions = currentQuiz?.questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)

    const fetchQuiz = bindActionCreators(fetchQuizById, dispatch);

    useEffect(() => {
        id && fetchQuiz(+id);
    }, [])

    return (
        <Container>
            {isLoading && <LoadingSpinner />}
            {!isLoading && currentQuiz && questions && (
                <>
                    <QuestionCard question={questions[currentQuestionIdx]} questionsLength={questions.length} />
                    <AnswersContainer>
                        {questions[currentQuestionIdx].answers.map((answer: Answer) => (
                            <AnswerCard answer={answer} />
                        ))}
                    </AnswersContainer>
                </>
            )}
        </Container>
    )
}

const AnswersContainer = styled.div`
    padding: 5px;
`

export default QuizPage;