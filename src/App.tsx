import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import RootRouter from "./router/RootRouter";

import './index.css';

const App = () => {
  return (
    <div className="App">
        <RootRouter />
    </div>
  );
};

export default App;
