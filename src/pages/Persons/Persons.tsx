import React from "react";
import { FC } from "react";
import styled from "styled-components";
import Header from "../../components/Header";

import { ROUTES } from "../../constants/routes";

import { Container } from "../Home/Home";
import PersonCard from "./components/PersonCard";
import { Person } from "../../types/entities";
import LoadingSpinner from "../../components/LoadingSpinner";

import { usePersonsQuery } from "../../queries/persons";

export const Persons: FC = () => {
  const { data: persons, isLoading } = usePersonsQuery();

  return (
    <>
      <Header title="Исторические личности" />
      <Container>
        <GridContainer>
          {isLoading && <LoadingSpinner />}
          {!isLoading &&
            persons &&
            persons.map((person: Person) => (
              <PersonCard
                key={person.id}
                person={person}
                route={`${ROUTES.PERSONS}/${person.id}`}
              />
            ))}
        </GridContainer>
      </Container>
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: clamp(15px, 5vw, 40px);

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Persons;
