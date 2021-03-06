import React from "react";
import RootRouter from "./router/RootRouter";
import "./index.css";

import { createGlobalStyle } from "styled-components";
import Wrapper from "./components/Wrapper";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Wrapper>
          <GlobalStyles />
          <RootRouter />
        </Wrapper>
      </div>
    </Provider>
  );
};

const GlobalStyles = createGlobalStyle`
  html {
    --primary-color: #f9f9ff;
    --accent-color: #5547f0;
    --secondary-accent-color: #4644aa;
    --text-color: #28254A;
    --secondary-text-color: #706CA4;
    --correct-color: #81FFC2;
    --secondary-correct-color: #b2d6e0;
    --wrong-color: #FF7888;
  }
`;

export default App;
