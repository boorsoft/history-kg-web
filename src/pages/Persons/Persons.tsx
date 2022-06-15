import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
import Header from "../../components/Header";

import LoadingSpinner from "../../components/LoadingSpinner";
import { ROUTES } from "../../constants/routes";
import { fetchPersons } from "../../store/app/actionCreators";
import { AppDispatch, RootState } from "../../store/store";
import { Person } from "../../types/store/AppState";

import { Container } from "../Home/Home";
import PersonCard from "./components/PersonCard";

export const Persons: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { persons, persons: { isLoading } } = useSelector((state: RootState) => state.app)

    const getPersons = bindActionCreators(fetchPersons, dispatch);


    useEffect(() => {
        getPersons();
    }, [])

    return (
        <>
        <Header title="Исторические личности" />
        <Container>
            {isLoading && <LoadingSpinner />}
            <GridContainer>
                {!isLoading && persons.data.map((person: Person) => (
                    <PersonCard key={person.id} person={person} route={`${ROUTES.PERSONS}/${person.id}`} />
                ))}
            </GridContainer>
        </Container>
        </>
    )
}

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export default Persons;