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
    --primary-color: #F9F7F6;
    --secondary-color: #FFFEFD;
    --accent-color: #FFD367;
    --secondary-accent-color: #FCE4A9;
    --text-color: #4A443B;
    --secondary-text-color: #8F8A82;
    --heading-text-color: #FFFFFF;
    --correct-color: #81FFC2;
    --secondary-correct-color: #b2d6e0;
    --wrong-color: #FF7888;
  }
`;

export default App;
