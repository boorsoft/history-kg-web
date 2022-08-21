import React from "react";
import { FC } from "react";
import styled from 'styled-components';
import { RiListUnordered } from 'react-icons/ri';

import { Quiz } from "../../../types/store/AppState";
import { useNavigate } from "react-router-dom";

type Props = {
    quiz: Quiz;
    route: string;
}

const QuizCard: FC<Props> = ({quiz, route}) => {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate(route)}>
            <Column>
                <Icon />
            </Column>
            <Column>
                <Title>{quiz.title}</Title>
                <Length>{`${quiz.questions.length} вопросов`}</Length>
            </Column>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--primary-color);
    width: 360px;
    height: 100px;
    box-shadow: 9px 4px 24px rgba(70, 68, 170, 0.1);
    border-radius: 18px;
    margin-bottom: 25px;
    padding: 30px 45px;
    cursor: pointer;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const Icon = styled(RiListUnordered)`
    font-size: 45px;
    color: var(--text-color);
    margin-right: 15px;
`

const Title = styled.div`
    color: var(--text-color);
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
`

const Length = styled.div`
    color: var(--secondary-text-color);
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
`

export default QuizCard;