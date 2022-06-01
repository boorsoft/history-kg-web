import React from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../../../constants/routes";

type Props = {
  correctAnswersCount: number;
  quizLength: number;
};

const QuizFinishPopup: FC<Props> = ({ correctAnswersCount, quizLength }) => {
    const navigate = useNavigate();
    
    return (
    <Container>
      <Text>
        Вы ответили правильно на {correctAnswersCount} вопросов из {quizLength}
      </Text>
      <Button onClick={() => navigate(ROUTES.QUIZ)}>ОК</Button>
    </Container>
  );
};

const Container = styled.div`
    position: absolute;
    z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: var(--primary-color);
  box-shadow: 8px 4px 24px rgba(70, 68, 170, 0.1);
  border-radius: 18px;
  width: 350px;
  height: 240px;
`;

const Text = styled.div`
    text-align: center;
`;

const Button = styled.button`
  background: var(--accent-color);
  color: var(--primary-color);
  border-radius: 18px;
  margin-top: 30px;
  font-weight: 700;
  width: 120px;
  height: 40px;
  outline: none;
  border: none;
`;

export default QuizFinishPopup;
