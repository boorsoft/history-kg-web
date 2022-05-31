import React from "react";
import { FC } from "react";
import styled from 'styled-components';

type Props = {
    text: string;
    onClick: () => void;
}

const QuizButton: FC<Props> = ({text, onClick}) => {
    return (
        <Button onClick={onClick}>{text}</Button>
    )
}

const Button = styled.button`
    display: grid;
    place-content: center;
    width: 190px;
    height: 45px;
    margin-top: 20px;
    background-color: var(--accent-color);
    color: var(--primary-color);
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 18px;   
`

export default QuizButton;