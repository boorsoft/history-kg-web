import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import AdminPage from "../pages/Admin/Admin";
import Home from "../pages/Home/Home";
import PersonPage from "../pages/Persons/components/PersonPage";
import Persons from "../pages/Persons/Persons";
import QuizPage from "../pages/Quiz/QuizPage";
import QuizMenu from "../pages/Quiz/QuizMenu";
import PDFViewer from "../pages/PDFViewer/PDFViewer";
import ArticlesPage from "../pages/Articles/ArticlesPage";
import SingleArticlePage from "../pages/Articles/SingleArticlePage";
import BooksPage from "../pages/Books/BooksPage";
import Download from "../pages/Download/Download";

const RootRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.ADMIN + "/*"} element={<AdminPage />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BOOKS} element={<BooksPage />} />
          <Route path={`${ROUTES.BOOKS}/:id`} element={<PDFViewer />} />
          <Route path={ROUTES.PERSONS} element={<Persons />} />
          <Route path={ROUTES.QUIZ} element={<QuizMenu />} />
          <Route path={`${ROUTES.PERSONS}/:id`} element={<PersonPage />} />
          <Route path={`${ROUTES.QUIZ}/:id`} element={<QuizPage />} />
          <Route path={ROUTES.ARTICLES} element={<ArticlesPage />} />
          <Route
            path={`${ROUTES.ARTICLES}/:id`}
            element={<SingleArticlePage />}
          />
          <Route path={ROUTES.DOWNLOAD} element={<Download />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RootRouter;
