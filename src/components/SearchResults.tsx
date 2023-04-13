import React, { FC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";

type Props = {
  results: any;
  isLoading: boolean;
};

const SearchResults: FC<Props> = ({ results, isLoading }) => {
  const navigate = useNavigate();

  const handleResultClick = (type: string, data: any) => {
    navigate(`/${type}/${data.id}`);
  };

  return (
    <Container isLoading={isLoading} isNoResults={results.length === 0}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && results.length === 0 && (
        <NotFoundText>Ничего не найдено</NotFoundText>
      )}
      {results.map((res: any) =>
        res.data.map((data: any) => (
          <ResultCard
            key={data.id}
            onClick={() => handleResultClick(res.type, data)}
          >
            <HeadingText>
              {data.title || data.firstName + " " + data.lastName}
            </HeadingText>
          </ResultCard>
        ))
      )}
    </Container>
  );
};

const Container = styled.div<{ isLoading: boolean; isNoResults: boolean }>`
  top: 49px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ isLoading, isNoResults }) =>
    isLoading || isNoResults ? "center" : "flex-start"};
  position: absolute;
  z-index: 10;
  background-color: var(--secondary-color);
  border-radius: 15px;
  width: clamp(330px, 90vw, 400px);
  min-height: 100px;
  max-height: 1050px;

  &:nth-child(1) &:last-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`;

const ResultCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 60px;
  padding: 10px 20px;

  transition: background 0.3s ease-in;

  &:nth-child(1) {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  &:hover {
    background-color: var(--primary-color);
  }
`;

const HeadingText = styled.div`
  width: 100%;
  color: var(--text-color);
  font-weight: 600;
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const NotFoundText = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
`;

export default SearchResults;
