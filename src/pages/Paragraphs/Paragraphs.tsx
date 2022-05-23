import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";;
import { AppDispatch, RootState } from "./../../store/store";
import { Paragraph } from "./../../types/store/AppState";
import { Container } from "../Home/Home";
import * as appActions from '../../store/app/actionCreators';
import ParagraphSelector from "./components/ParagraphSelector";;
import { ROUTES } from '../../constants/routes';
import LoadingSpinner from "../../components/LoadingSpinner";

const Paragraphs: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { paragraphs, paragraphs: { isLoading } } = useSelector((state: RootState) => state.app);
  
  const { fetchParagraphs } = bindActionCreators(appActions, dispatch);

  useEffect(() => {
    fetchParagraphs();
  }, []);

  return (
    <Container>
      {isLoading && <LoadingSpinner />}
      {!isLoading && paragraphs.data.map((paragraph: Paragraph) => (
        <ParagraphSelector key={paragraph.id} paragraph={paragraph} route={`${ROUTES.PARAGRAPHS}/${paragraph.id}`} />
      ))}
    </Container>
  );
};

export default Paragraphs;