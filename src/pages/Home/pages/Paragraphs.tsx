import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchParagraphs } from "../../../store/app/actions";
import { AppDispatch, RootState } from "../../../store/store";
import { Paragraph } from "../../../types/store/AppState";
import { Container } from "../Home";

const Paragraphs: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const paragraphs = useSelector((state: RootState) => state.app.paragraphs);

  useEffect(() => {
      fetchParagraphs();
  }, []);

  return (
    <Container>
      {paragraphs.map((paragraph: Paragraph) => (
        <div>{paragraph.title}</div>
      ))}
    </Container>
  );
};

export default Paragraphs;
