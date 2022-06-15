import React from "react";
import styled from "styled-components";
import "../../index.css";
import MenuButton from "./components/MenuButton";
import HomePic1 from "../../assets/images/home/home-pic1.jpg";
import HomePic2 from "../../assets/images/home/home-pic2.jpg";
import HomePic3 from "../../assets/images/home/home-pic3.jpg";
import HomePic4 from "../../assets/images/home/home-pic4.jpg";
import { ROUTES } from "../../constants/routes";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header title="История кыргызстана" isHome />
      <Container>
        <MenuButton route={ROUTES.PARAGRAPHS} title="Параграфы" image={HomePic1} />
        <MenuButton route={ROUTES.PERSONS} title="Личности" image={HomePic2} />
        <MenuButton route={ROUTES.QUIZ} title="Тестирование" image={HomePic3} />
        <MenuButton route={ROUTES.ABOUT} title="О приложении" image={HomePic4} />
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
  padding: 20px;
  padding-top: 150px;
`;

export default Home;
