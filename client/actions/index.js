import axios from 'axios';
import config from '../../server/config/config';

export const allBooks = () => {
    return {
        type: 'GET_BOOKS',
        payload: axios.get(`${config.apiPrefix}/api/books`),
    }
};

export const getOneBook = (id) => {
    return {
        type: 'GET_ONE_BOOK',
        payload: axios.get(`${config.apiPrefix}/api/book/${id}`),
    }
};
