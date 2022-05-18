import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import LoadingSpinner from "../../components/LoadingSpinner";
import { fetchPersons } from "../../store/app/actions";
import { AppDispatch, RootState } from "../../store/store";
import { Person } from "../../types/store/AppState";

import { Container } from "../Home/Home";

export const Persons: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { persons, persons: { isLoading } } = useSelector((state: RootState) => state.app)

    const getPersons = bindActionCreators(fetchPersons, dispatch);


    useEffect(() => {
        getPersons();
    }, [])

    return (
        <Container>
            {isLoading && <LoadingSpinner />}
            {!isLoading && persons.data.map((person: Person) => (
                <div>{person.firstName + ' ' + person.lastName}</div>
            ))}
        </Container>
    )
}

export default Persons;