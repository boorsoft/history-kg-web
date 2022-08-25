import React from "react";
import { FC } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header: FC<{ title: string; isHome?: boolean }> = ({ title, isHome }) => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Row>
        {!isHome && <Icon onClick={() => navigate(-1)} />}
        <Title isHome={isHome}>{title}</Title>
      </Row>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 90px;
  background-color: var(--accent-color);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div<{isHome?: boolean}>`
  color: var(--heading-text-color);
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: ${({isHome}) => isHome ? 'center' : 'left'};
  flex: 4;
`;

const Icon = styled(BsFillArrowLeftCircleFill)`
  color: var(--heading-text-color);
  font-size: 27px;
  cursor: pointer;
  margin: 0 20px;
  flex: 1;
`;

export default Header;
