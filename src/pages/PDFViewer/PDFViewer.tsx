import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import styled from "styled-components";

import "@react-pdf-viewer/core/lib/styles/index.css";

import Header from "../../components/Header";
import { AppDispatch, RootState } from "../../store/store";
import { Book } from "../../types/store/AppState";
import { BASE_URL } from "../../constants/constants";
import { bindActionCreators } from "redux";
import { fetchBookById } from "../../store/app/actionCreators";
import { useParams } from "react-router-dom";

const PDFViewer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();

  const { currentBook, isLoading } = useSelector((state: RootState) => state.app.books);
  const book = currentBook;

  const getBook = bindActionCreators(fetchBookById, dispatch);

  useEffect(() => {
    id && getBook(+id);
    if (!isLoading)
    console.log(`${BASE_URL}/books/${book?.fileName}`)
  }, [isLoading]);

  return (
    <Wrapper>
      <Header title={book ? book.title : "История Кыргызстана"} />
      <Container>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        
          <Viewer fileUrl={`${BASE_URL}/books/${book?.fileName}`} />
        
      </Worker>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
  padding: 20px;
  width: 100%;
`;

export default PDFViewer;
