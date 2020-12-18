import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import appReducer from './appReducer';

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    app: appReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));