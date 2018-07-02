import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import {bookActive} from "./reducers/bookActive";
import {bookOne} from "./reducers/bookOne";

//const middleware = applyMiddleware(promise(), logger());
const middleware = applyMiddleware(promise());

const reducers = combineReducers({
    books: bookActive,
    book: bookOne
});

const store = createStore(reducers, middleware); //Создаем Хранилище

export default store;