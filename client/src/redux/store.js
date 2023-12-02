import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";


const initialstate = {}

const reducers = combineReducers({
    auth: authReducer
})

const store = createStore(reducers, initialstate, composeWithDevTools(applyMiddleware(thunk)))

export default store;