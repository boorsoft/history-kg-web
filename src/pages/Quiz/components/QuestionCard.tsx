import React from "react";
import { FC } from "react";
import styled from 'styled-components';
import { Question } from "../../../types/store/AppState";

type Props = {
    question: Question
    quizLengthText: string;
}

const QuestionCard: FC<Props> = ({question, quizLengthText}) => {
    return (
        <Container>        
            <Card>
                <QuestionContainer>{question.text}</QuestionContainer>
            </Card>
            <QuestionNumber>{quizLengthText}</QuestionNumber>
        </Container>

    )
}

const Container = styled.div`
    margin-bottom: 35px;
`

const Card = styled.div`
    display: grid;
    place-content: center;
    width: 365px;
    height: 189px;
    background: var(--primary-color);
    border-radius: 24px;
    filter: drop-shadow(8px 4px 24px rgba(70, 68, 170, 0.1));
`

const QuestionContainer = styled.div`
    position: relative;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: var(--text-color);
`

const QuestionNumber = styled.div`
    position: relative;
    z-index: 1;
    bottom: 15px;
    left: 35%;
    display: grid;
    place-content: center;
    width: 90px;
    height: 35px;
    background-color: var(--accent-color);
    border-radius: 18px;
    color: var(--primary-color);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.2em;
`

export default QuestionCard;