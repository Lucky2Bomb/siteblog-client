import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import appReducer from './appReducer';
import universityReducer from './universityReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    post: postReducer,
    app: appReducer,
    university: universityReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));