import React from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import { Person } from '../../../types/store/AppState';

type Props = {
    person: Person
    route?: string;
}

const PersonCard: FC<Props> = ({person, route}) => {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate(route!)}>
            <Image image={person.image} />
            <NameContainer>{`${person.firstName} ${person.lastName}`}</NameContainer>
        </Container>
    )
}

const Container = styled.div`
    cursor: pointer;
    margin-right: 15px;
    height: 230px;
`

const Image = styled.div<{image: string}>`
    position: relative;
    width: 160px;
    height: 230px;
    background-color: var(--primary-color);
    background-image: ${({image}) => `url(${image})` };
    background-position: top;
    background-repeat: no-repeat;
    background-size: 135%;
    filter: drop-shadow(4px 4px 17px rgba(70, 68, 170, 0.2));
    border-radius: 15px;
`

const NameContainer = styled.div`
    position: relative;
    z-index: 1;
    bottom: 53px;
    display: grid;
    place-content: center;
    background: rgba(43, 41, 41, 0.5);
    backdrop-filter: blur(8px);
    width: 100%;
    height: 53px;
    border-radius: 0 0 15px 15px;
    font-size: 12px;
    line-height: 14px;
    color: var(--heading-text-color);
    font-weight: 600;
`

export default PersonCard;