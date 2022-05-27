import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import parseHtml from 'html-react-parser';

import { fetchParagraphById } from "../../../store/app/actionCreators";

import { AppDispatch, RootState } from "../../../store/store";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Paragraph: FC = () => {
    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    const { currentParagraph, isLoading } = useSelector((state: RootState) => state.app.paragraphs);

    const fetchParagraph = bindActionCreators(fetchParagraphById, dispatch);

    useEffect(() => {
        id && fetchParagraph(+id);
    }, [])

    return (
        <Wrapper>
            <Container>
                {isLoading && <LoadingSpinner />}
                <Text>
                    {!isLoading && currentParagraph && parseHtml(currentParagraph.text)}
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

export default Paragraph;