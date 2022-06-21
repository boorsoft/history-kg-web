import React from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import { Person } from '../../../types/store/AppState';

type Props = {
    person: Person
    route: string;
}

const PersonCard: FC<Props> = ({person, route}) => {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate(route)}>
            <Image image={person.image} />
            <NameContainer>{`${person.firstName} ${person.lastName}`}</NameContainer>
        </Container>
    )
}

const Container = styled.div`
    cursor: pointer;
`

const Image = styled.div<{image: string}>`
    position: relative;
    width: 140px;
    height: 215px;
    background-color: var(--primary-color);
    background-image: ${({image}) => `url(${image})` };
    background-position: center;
    background-repeat: no-repeat;
    background-size: 120%;
    filter: drop-shadow(4px 4px 17px rgba(70, 68, 170, 0.2));
    border-radius: 22px 22px 10px 10px;
`

const NameContainer = styled.div`
    position: relative;
    z-index: 1;
    bottom: 45px;
    left: -10px;
    display: grid;
    place-content: center;
    background-color: var(--accent-color);
    width: 160px;
    height: 30px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: var(--primary-color);
`

export default PersonCard;