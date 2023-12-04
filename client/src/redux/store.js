import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import modalReducer from "./reducers/modalReducer";
import postReducer from "./reducers/postReducers";


const initialstate = {}

const reducers = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    post: postReducer
})

const store = createStore(reducers, initialstate, composeWithDevTools(applyMiddleware(thunk)))

export default store;