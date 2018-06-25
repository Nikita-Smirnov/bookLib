/**
 * Объединяем вместе все преобразователи
 */

import {combineReducers} from 'redux';
import ActiveBook from './bookActive'

import api from '../api/index';

const allReducers = combineReducers({
    books: api.allBooksInfo(),
    active: ActiveBook,

});


export default allReducers;