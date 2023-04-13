import React, { FC } from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ROUTES } from "../../constants/routes";
import { Book } from "../../types/entities";
import BookCard from "../Home/components/BookCard";
import { Container } from "../Home/Home";
import { useBooksCached } from "../../hooks/useCachedData";

const BooksPage: FC = () => {
  const books = useBooksCached();

  return (
    <>
      <Header title="Книги" />
      <Container>
        {/* {isLoading && <LoadingSpinner />} */}
        <GridContainer>
          {books &&
            books.map((book: Book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                cityAndYear={book.city + " " + book.year}
                route={`${ROUTES.BOOKS}/${book.id}`}
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

export default BooksPage;
