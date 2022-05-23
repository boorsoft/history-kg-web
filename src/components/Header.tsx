import React from "react";
import { FC } from "react";
import styled from "styled-components";

const Header: FC<{title: string}> = ({title}) => {
    return (
        <StyledHeader>
            <Title>{title}</Title>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
`

const Title = styled.div`
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;
`

export default Header;