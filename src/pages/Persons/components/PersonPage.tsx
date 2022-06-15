import React, { useEffect } from "react";
import { FC } from "react";
import styled from 'styled-components';
import parseHtml from 'html-react-parser';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { bindActionCreators } from "redux";

import { fetchPersonById } from '../../../store/app/actionCreators';
import LoadingSpinner from "../../../components/LoadingSpinner";
import Header from "../../../components/Header";

const PersonPage: FC = () => {
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>();

    const { currentPerson, isLoading } = useSelector((state: RootState) => state.app.persons)

    const fetchPerson = bindActionCreators(fetchPersonById, dispatch);

    useEffect(() => {
        id && fetchPerson(+id);
    }, [])

    return (
        <Wrapper>
            <Header title={currentPerson?.firstName + ' ' + currentPerson?.lastName} />
            <Container>
                {isLoading && <LoadingSpinner />}
                <Text>
                    {!isLoading && currentPerson && parseHtml(currentPerson.bio)}
                </Text>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    padding: 10px;
    width: clamp(350px, 40vw, 500px);
`

const Text = styled.div`
    margin: auto;
    max-width: 500px;
`

export default PersonPage;