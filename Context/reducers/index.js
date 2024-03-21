import { combineReducers } from "redux";
import Userreducers from "./Userreducers";

const myReducer=combineReducers({
    user:Userreducers
})

export default myReducer;