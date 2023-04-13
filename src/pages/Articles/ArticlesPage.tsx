import React, { FC } from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Article } from "../../types/entities";
import ArticleCard from "../Home/components/ArticleCard";
import { Container } from "../Home/Home";

import { ROUTES } from "../../constants/routes";
import { useArticlesCached } from "../../hooks/useCachedData";

const ArticlesPage: FC = () => {
  const articles = useArticlesCached();

  return (
    <>
      <Header title="Статьи" />
      <Container>
        {/* {isLoading && <LoadingSpinner />} */}
        <GridContainer>
          {articles &&
            articles.map((article: Article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                text={article.text}
                route={`${ROUTES.ARTICLES}/${article.id}`}
              />
            ))}
        </GridContainer>
      </Container>
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(15px, 5vw, 40px);

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export default ArticlesPage;
