import React from "react";
import { FC } from "react";
import styled from "styled-components";
import parseHtml from "html-react-parser";
import { useParams } from "react-router-dom";

import LoadingSpinner from "../../../components/LoadingSpinner";
import Header from "../../../components/Header";
import { usePersonQuery } from "../../../queries/persons";

const PersonPage: FC = () => {
  const { id } = useParams();

  const { data: person, isLoading } = usePersonQuery(+id!);

  return (
    <Wrapper>
      <Header title={person ? person.firstName + " " + person.lastName : ""} />
      <Container>
        {isLoading && <LoadingSpinner />}
        <Text>{!isLoading && person && parseHtml(person.bio)}</Text>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin-top: 120px;
  padding: 20px;
  width: 100%;
`;

const Text = styled.div`
  margin: auto;
  max-width: 500px;
  text-align: justify;
  line-height: 25px;
`;

export default PersonPage;
