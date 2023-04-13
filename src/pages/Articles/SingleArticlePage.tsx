import React from "react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import parseHtml from "html-react-parser";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";

import { useArticleQuery } from "../../queries/articles";

const SingleArticlePage: FC = () => {
  const { id } = useParams();

  const { data: article, isLoading } = useArticleQuery(+id!);

  return (
    <Wrapper>
      <Header title={article?.title || ""} />
      <Container>
        {isLoading && <LoadingSpinner />}
        <Text>{!isLoading && article && parseHtml(article.text)}</Text>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin-top: 120px;
  padding: 20px;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-top: 80px;
  }
`;

const Text = styled.div`
  margin: auto;
  max-width: 500px;
  text-align: justify;
  line-height: 25px;
`;

export default SingleArticlePage;
