import React from "react";
import { FC } from "react";
import styled from "styled-components";
import Header from "../../components/Header";

import { ROUTES } from "../../constants/routes";

import { Container } from "../Home/Home";
import PersonCard from "./components/PersonCard";
import { usePersonsCached } from "../../hooks/useCachedData";
import { Person } from "../../types/entities";

export const Persons: FC = () => {
  const persons = usePersonsCached();

  return (
    <>
      <Header title="Исторические личности" />
      <Container>
        <GridContainer>
          {persons &&
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
  grid-template-columns: 1fr 1fr;
  gap: clamp(15px, 5vw, 40px);
`;

export default Persons;
