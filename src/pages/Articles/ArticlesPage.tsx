import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ROUTES } from "../../constants/routes";
import { fetchArticles, fetchBooks } from "../../store/app/actionCreators";
import { AppDispatch, RootState } from "../../store/store";
import { Article, Book } from "../../types/store/AppState";
import BooksList from "../Admin/components/Book/BooksList";
import ArticleCard from "../Home/components/ArticleCard";
import BookCard from "../Home/components/BookCard";
import { Container } from "../Home/Home";

const ArticlesPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    articles,
    articles: { isLoading },
  } = useSelector((state: RootState) => state.app);

  const getArticles = bindActionCreators(fetchArticles, dispatch);

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Header title="Статьи" />
      <Container>
        {isLoading && <LoadingSpinner />}
        <GridContainer>
          {articles &&
            !isLoading &&
            articles.data.map((article: Article) => (
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
