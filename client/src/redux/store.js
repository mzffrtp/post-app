import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const initialstate = {}

const reducers = combineReducers({

})

const store = createStore(reducers, initialstate, composeWithDevTools(applyMiddleware(thunk)))

export default store;