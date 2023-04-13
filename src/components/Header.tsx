import React from "react";
import { FC } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Header: FC<{ title: string; isHome?: boolean }> = ({ title, isHome }) => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Row>
        {!isHome && <Icon onClick={() => navigate(-1)} />}
        <Title isHome={isHome}>{title}</Title>
      </Row>
      <SearchBar />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 120px;
  padding: 0 20px;
  background-color: var(--accent-color);
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.07);

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div<{ isHome?: boolean }>`
  color: var(--heading-text-color);
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: ${({ isHome }) => (isHome ? "center" : "left")};
`;

const Icon = styled(BsArrowLeft)`
  color: var(--heading-text-color);
  font-size: 22px;
  cursor: pointer;
  margin-right: 20px;
  flex: 1;
`;

export default Header;
