// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from './rootReducer'
import Saga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware: ()=>[sagaMiddleware]
});

sagaMiddleware.run(Saga)

export default store