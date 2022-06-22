import { combineReducers } from "redux";
import { noteReducer } from "./reducers";

export default combineReducers({ noteReducer: noteReducer });
