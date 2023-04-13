import { applyMiddleware, StoreEnhancer } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import { initialState as authState } from "./auth/reducer";
import { configureStore } from "@reduxjs/toolkit";

const rootState = {
  auth: authState,
};

const middlewares = [thunk];

const enhancer: StoreEnhancer = applyMiddleware(...middlewares);

const store = configureStore({
  reducer: reducers,
  enhancers: [enhancer],
  preloadedState: rootState,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
