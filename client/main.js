import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from "./reducers/index"; //Подключаем все преобразователи
import WebPage from './components/webPage'; //Подключаем компонент отображения информации на странице


const store = createStore(allReducers); //Создаем Хранилище

ReactDOM.render(
    <Provider store={store}>
        <WebPage/>
    </Provider>,
    document.getElementById('booksLib')
);