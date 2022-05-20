import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import AdminPage from "../pages/Admin/Admin";
import Home from "../pages/Home/Home";
import Paragraph from "../pages/Paragraphs/components/Paragraph";
import Paragraphs from "../pages/Paragraphs/Paragraphs";

const RootRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.ADMIN + "/*"} element={<AdminPage />} />
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.PARAGRAPHS} element={<Paragraphs />} />
                    <Route path={`${ROUTES.PARAGRAPHS}/:id`} element={<Paragraph />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RootRouter;