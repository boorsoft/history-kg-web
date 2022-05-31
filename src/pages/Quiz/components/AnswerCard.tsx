import React, { useState } from "react";
import { FC } from "react";
import styled from "styled-components";
import { BiRadioCircleMarked } from "react-icons/bi";
import { Answer } from "../../../types/store/AppState";

type Props = {
  answer: Answer;
  onClick: () => void;
};

const AnswerCard: FC<Props> = ({ answer, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Card
      isClicked={isClicked}
      isCorrect={answer.isCorrectAnswer}
      onClick={() => {
        setIsClicked(true);
        onClick();
      }}
    >
      <Icon />
      <Text>{answer.text}</Text>
    </Card>
  );
};

const Card = styled.div<{ isCorrect: boolean; isClicked: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 365px;
  height: 76px;
  padding: 25px;
  margin-bottom: 25px;
  background-color: ${({ isCorrect, isClicked }) =>
    isCorrect ? `var(--correct-color)` : `var(--wrong-color)`};
  box-shadow: 8px 4px 24px rgba(70, 68, 170, 0.1);
  border-radius: 18px;
  cursor: pointer;
`;

const Icon = styled(BiRadioCircleMarked)`
  color: var(--accent-color);
  font-size: 36px;
  margin-right: 15px;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--text-color);
`;

export default AnswerCard;
