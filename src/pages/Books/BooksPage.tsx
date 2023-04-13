import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ROUTES } from "../../constants/routes";
import { fetchBooks } from "../../store/app/actionCreators";
import { AppDispatch, RootState } from "../../store/store";
import { Book } from "../../types/entities";
import BookCard from "../Home/components/BookCard";
import { Container } from "../Home/Home";

const BooksPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    books,
    books: { isLoading },
  } = useSelector((state: RootState) => state.app);

  const getBooks = bindActionCreators(fetchBooks, dispatch);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <Header title="Книги" />
      <Container>
        {isLoading && <LoadingSpinner />}
        <GridContainer>
          {books &&
            !books.isLoading &&
            books.data.map((book: Book) => (
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
