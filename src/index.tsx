import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

const rootElement = ReactDOMClient.createRoot(container!);

rootElement.render(<App />);
