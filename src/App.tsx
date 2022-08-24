import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import RootRouter from "./router/RootRouter";
import Wrapper from "./components/Wrapper";
import store from "./store/store";
import "./index.css";

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
