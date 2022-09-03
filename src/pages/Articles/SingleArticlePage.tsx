import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import parseHtml from "html-react-parser";
import { AppDispatch, RootState } from "../../store/store";
import { fetchArticleById } from "../../store/app/actionCreators";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";

const SingleArticlePage: FC = () => {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const { currentArticle, isLoading } = useSelector(
    (state: RootState) => state.app.articles
  );

  const getArticle = bindActionCreators(fetchArticleById, dispatch);

  useEffect(() => {
    id && getArticle(+id);
  }, []);

  return (
    <Wrapper>
      <Header title={currentArticle!.title || ""} />
      <Container>
        {isLoading && <LoadingSpinner />}
        <Text>
          {!isLoading && currentArticle && parseHtml(currentArticle.text)}
        </Text>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin-top: 50px;
  padding: 20px;
  /* width: clamp(350px, 90vw, 500px); */
  width: 100%;
`;

const Text = styled.div`
  margin: auto;
  max-width: 500px;
`;

export default SingleArticlePage;
