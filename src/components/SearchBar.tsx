import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <SearchContainer>
      <Row>
        <Input placeholder="Поиск" />
        <SearchIcon />
      </Row>
    </SearchContainer>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background: none;
  width: 90%;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: var(--heading-text-color);

  &::placeholder {
    color: var(--heading-text-color);
  }
`;

const SearchIcon = styled(BiSearch)`
  color: var(--heading-text-color);
  font-weight: bold;
  font-size: 25px;
`

const SearchContainer = styled.div`
  width: clamp(330px, 90vw, 400px);
  height: 42px;
  background-color: var(--secondary-accent-color);
  padding: 10px 24px;
  border-radius: 25px;
`;

export default SearchBar;
