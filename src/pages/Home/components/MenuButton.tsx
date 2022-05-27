import React from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  title: string;
  image: string;
  route: string;
};

const MenuButton: FC<Props> = ({ title, image, route }) => {
    const navigate = useNavigate()

  return (
    <ButtonContainer onClick={() => navigate(route)}>
      <Image image={image} />
      <TitleContainer>{title}</TitleContainer>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  cursor: pointer;
`;

const Image = styled.div<{ image: string }>`
  position: relative;
  width: clamp(340px, 50vw, 450px);
  height: clamp(140px, 35vw, 180px);
  background-image: ${({ image }) => `url(${image})`};
  background-position: 100% 90%;
  background-size: 100%;
  border-radius: 14px;
  box-shadow: 0px 4px 30px rgba(51, 51, 51, 0.35);
`;

const TitleContainer = styled.div`
  position: relative;
  z-index: 1;
  bottom: 15px;
  display: grid;
  place-content: center;
  min-width: 160px;
  max-width: 220px;
  padding: 15px 30px;
  height: 36px;
  background-color: var(--accent-color);
  box-shadow: 0px 4px 24px rgba(51, 51, 51, 0.25);
  border-radius: 18px;
  color: var(--primary-color);
  letter-spacing: 1.3px;
`;

export default MenuButton;
