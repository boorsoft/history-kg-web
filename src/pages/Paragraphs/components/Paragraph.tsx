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
        <Container>
            {isLoading && <LoadingSpinner />}
            {!isLoading && parseHtml(currentParagraph)}
        </Container>
    )
}

const Container = styled.div`
    padding: 25px;
    width: clamp(450px, 50vw, 700px);
`

export default Paragraph;