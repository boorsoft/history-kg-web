import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import sanitizeHtml from "sanitize-html";

type Props = {
  title: string;
  text: string;
  route: string;
};

const ArticleCard = ({ title, text, route }: Props) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(route)}>
      <div>
        <Title>{title}</Title>
        <Text>
          {sanitizeHtml(text, {
            allowedTags: [],
          })}
        </Text>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 270px;
  height: 115px;
  padding: 7px 15px;
  margin-right: 20px;
  background: var(--secondary-color);
  box-shadow: 0px 14px 55px -5px rgba(73, 55, 38, 0.05);
  border-radius: 15px;
  cursor: default;
`;

const Title = styled.h1`
  width: 240px;
  color: var(--text-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

const Text = styled.h3`
  color: var(--secondary-text-color);
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default ArticleCard;
