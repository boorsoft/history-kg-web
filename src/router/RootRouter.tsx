import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Admin from "../pages/Admin/Admin";
import Home from "../pages/Home/Home";
import Paragraphs from "../pages/Home/pages/Paragraphs";

const RootRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.ADMIN} element={<Admin />} />
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.PARAGRAPHS} element={<Paragraphs />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RootRouter;