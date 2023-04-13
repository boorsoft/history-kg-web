import React from "react";
import styled from "styled-components";
import "../../index.css";
import { ROUTES } from "../../constants/routes";
import Header from "../../components/Header";
import Section from "./components/Section";

const Home = () => {
  return (
    <>
      <Header title="История кыргызстана" isHome />
      <Container>
        <Section
          title="Книги"
          scroll="horizontal"
          type="books"
          route={ROUTES.BOOKS}
        />
        <Section
          title="Исторические личности"
          scroll="horizontal"
          type="persons"
          route={ROUTES.PERSONS}
        />
        <Section
          title="Тестирование"
          scroll="vertical"
          type="quiz"
          route={ROUTES.QUIZ}
        />
        <Section
          title="Статьи"
          scroll="horizontal"
          type="articles"
          route={ROUTES.ARTICLES}
        />
      </Container>
    </>
  );
};

export const Container = styled.div`
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  /* padding: 20px; */
  padding-top: 150px;

  @media screen and (min-width: 600px) {
    padding: 0 25%;
    padding-top: 100px;
  }
`;

export default Home;
