import { applyMiddleware, createStore, StoreEnhancer } from "redux"
import thunk from "redux-thunk"

import reducers from "./reducers"
import { initialState as authState } from "./auth/reducer";
import { initialState as appState } from "./app/reducer";

const rootState = {
    auth: authState,
    app: appState
}

const middlewares = [thunk]

const enhancer: StoreEnhancer = applyMiddleware(...middlewares)  

const store = createStore(reducers, rootState, enhancer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store