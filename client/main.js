import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import WebPage from './components/webPage'; //Подключаем компонент отображения информации на странице
import BooksList from './containers/bookList';
import BookDetail from './containers/bookDetail';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={WebPage}>
                <IndexRoute component={BooksList} />
                <Route path=":idBook" component={BookDetail}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('booksLib')
);