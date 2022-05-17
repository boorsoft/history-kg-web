import { combineReducers } from "redux";
import appReducer from "./app/reducer";
import authReducer from "./auth/reducer";

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer
})

export default reducers