import React from "react";
import { FC } from "react";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header: FC<{title: string}> = ({title}) => {
    const navigate = useNavigate();

    return (
        <StyledHeader>
            <Row>
                <Icon onClick={() => navigate(-1)} />
                <Title>{title}</Title>
            </Row>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 120px;
    background-color: var(--primary-color);
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 400px;
`

const Title = styled.div`
    flex: 3;
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;
`

const Icon = styled(BsFillArrowLeftCircleFill)`
    flex: 1;
    color: var(--accent-color);
    font-size: 27px;
    cursor: pointer;
`

export default Header;