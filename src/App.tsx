import React from "react";
import RootRouter from "./router/RootRouter";

import './index.css';
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
          <Wrapper>
            <Header>История Кыргызстана</Header> 
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
    --text-color: #28254A;
  }
`

export default App;
