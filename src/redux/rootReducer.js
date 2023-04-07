import {combineReducers} from "redux"
import useReducer from "./reducer"
import sReducer from "./sreducer";
import searchReducer from "./searchreducer";

const rootReducer = combineReducers({
    user:useReducer,
    sred:sReducer,
    searchred:searchReducer
})

export default rootReducer;