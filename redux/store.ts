import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const composeEnhancer = composeWithDevTools({});

const saga = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(saga)));

saga.run(rootSaga);

export default store;
