import React from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Paragraph } from "../../../types/store/AppState";

type Props = {
    paragraph: Paragraph;
    route: string;
}

const ParagraphSelector: FC<Props> = ({paragraph: {title, image}, route}) => {
    const navigate = useNavigate();
    
    return (
        <Container onClick={() => navigate(route)}>
            <Image image={image} />
            <TitleContainer>{title}</TitleContainer>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    cursor: pointer;
`

const Image = styled.div<{image: string}>`
    position: relative;
    width: clamp(300px, 40vw, 440px);
    height: clamp(50px, 40vw, 120px);
    background-image: ${({image}) => `url(${image})`};
    background-position: center 100%;
    background-size: 100%;
    filter: drop-shadow(0px 4px 30px rgba(70, 68, 170, 0.25));
    border-radius: 12px;
`

const TitleContainer = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    z-index: 1;
    padding: 8px 15px;
    background-color: var(--accent-color);
    color: var(--primary-color);
    width: clamp(150px, 50vw, 220px);
    height: clamp(26px, 30vw, 36px);
    box-shadow: 0px 4px 24px rgba(51, 51, 51, 0.25);
    border-radius: 18px;
    bottom: 85px;
    left: -30px;
`

export default ParagraphSelector;