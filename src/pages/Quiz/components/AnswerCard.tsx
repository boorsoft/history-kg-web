import React, { useEffect, useState } from "react";
import { FC } from "react";
import styled from "styled-components";
import { BiRadioCircleMarked } from "react-icons/bi";
import { Answer } from "../../../types/store/AppState";

type Props = {
  answer: Answer;
  disabled: boolean;
  confirmed: boolean;
  hasMultipleCorrectAnswers: boolean;
  onClick: () => void;
};

const AnswerCard: FC<Props> = ({
  answer,
  onClick,
  disabled,
  confirmed,
  hasMultipleCorrectAnswers,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <Card
      isClicked={isClicked}
      isCorrect={answer.isCorrectAnswer}
      hasMultipleCorrectAnswers={hasMultipleCorrectAnswers}
      disabled={disabled}
      selected={selected}
      confirmed={confirmed}
      onClick={() => {
        if (disabled) return;

        setIsClicked(true);
        setSelected(!selected);
        onClick();
      }}
    >
      <Icon />
      <Text>{answer.text}</Text>
    </Card>
  );
};

const Card = styled.div<{
  isCorrect: boolean;
  isClicked: boolean;
  disabled: boolean;
  hasMultipleCorrectAnswers: boolean;
  selected: boolean;
  confirmed: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 365px;
  height: 76px;
  padding: 25px;
  margin-bottom: 25px;
  background-color: ${({
    isCorrect,
    isClicked,
    disabled,
    confirmed,
    hasMultipleCorrectAnswers,
  }) => {
    if (!hasMultipleCorrectAnswers) {
      if (isClicked) {
        return isCorrect ? `var(--correct-color)` : `var(--wrong-color)`;
      } else if (disabled) {
        return isCorrect && `var(--correct-color)`;
      } else {
        return `var(--primary-color)`;
      }
    } else {
      if (confirmed) {
        return isCorrect ? `var(--correct-color)` : `var(--wrong-color)`;
      } 
    }
  }};
  border-width: 1px;
  border-color: var(--accent-color);
  border-style: ${({isClicked, hasMultipleCorrectAnswers, selected}) => {
    if (hasMultipleCorrectAnswers) {
      if (isClicked) {
        return selected ? 'solid' : '';
      }
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
