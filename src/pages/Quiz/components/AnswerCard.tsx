import React, { useEffect, useState } from "react";
import { FC } from "react";
import styled from "styled-components";
import { BiRadioCircleMarked } from "react-icons/bi";
import { Answer } from "../../../types/store/AppState";

type Props = {
  answer: Answer;
  disabled: boolean;
  onClick: () => void;
};

const AnswerCard: FC<Props> = ({ answer, onClick, disabled }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
  }, [disabled])

  return (
    <Card
      isClicked={isClicked}
      isCorrect={answer.isCorrectAnswer}
      disabled={disabled}
      onClick={() => {
        if (disabled) return;

        setIsClicked(true);
        onClick();
      }}
    >
      <Icon />
      <Text>{answer.text}</Text>
    </Card>
  );
};

const Card = styled.div<{ isCorrect: boolean; isClicked: boolean, disabled: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 365px;
  height: 76px;
  padding: 25px;
  margin-bottom: 25px;
  background-color: ${({ isCorrect, isClicked, disabled }) => {
    if (isClicked) {
      return isCorrect ? `var(--correct-color)` : `var(--wrong-color)`;
    } else if (disabled) {
      return isCorrect && `var(--correct-color)`;
    } else {
      return `var(--primary-color)`;
    }
  }};
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
