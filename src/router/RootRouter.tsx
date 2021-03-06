import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import AdminPage from "../pages/Admin/Admin";
import Home from "../pages/Home/Home";
import Paragraph from "../pages/Paragraphs/components/Paragraph";
import Paragraphs from "../pages/Paragraphs/Paragraphs";
import PersonPage from "../pages/Persons/components/PersonPage";
import Persons from "../pages/Persons/Persons";
import QuizPage from "../pages/Quiz/QuizPage";
import QuizMenu from "../pages/Quiz/QuizMenu";

const RootRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.ADMIN + "/*"} element={<AdminPage />} />
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.PERSONS} element={<Persons />} />
                    <Route path={ROUTES.PARAGRAPHS} element={<Paragraphs />} />
                    <Route path={ROUTES.QUIZ} element={<QuizMenu />} />
                    <Route path={`${ROUTES.PARAGRAPHS}/:id`} element={<Paragraph />} />
                    <Route path={`${ROUTES.PERSONS}/:id`} element={<PersonPage />} />
                    <Route path={`${ROUTES.QUIZ}/:id`} element={<QuizPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RootRouter;