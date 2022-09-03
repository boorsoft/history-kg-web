import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  title: string;
  author: string;
  cityAndYear: string;
  route: string;
};

const BookCard = ({ title, author, cityAndYear, route }: Props) => {
  const navigate = useNavigate()

  return (
    <Container onClick={() => navigate(route)}>
      <div>
        <Title>{title}</Title>
        <Author>{author}</Author>
      </div>
      <div>
        <CityAndYear>{cityAndYear}</CityAndYear>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 270px;
  height: 120px;
  padding: 3px 17px;
  margin-right: 20px;
  background: var(--secondary-color);
  box-shadow: 0px 14px 55px -5px rgba(73, 55, 38, 0.05);
  border-radius: 15px;
`;

const Title = styled.h1`
  width: 240px;
  color: var(--text-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

const Author = styled.h3`
  color: var(--secondary-text-color);
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

const CityAndYear = styled.h5`
  color: var(--secondary-text-color);
  font-weight: 200;
  font-size: 10px;
  line-height: 12px;
`;

export default BookCard;
