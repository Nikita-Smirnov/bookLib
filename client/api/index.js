import axios from 'axios';

import config from '../../server/config/config';


export default {
    allBooksInfo() {
        var src = axios.get(`${config.apiPrefix}/api/books`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (response) {
                console.log(response);
            });
        return src;//Возвращаем информацию о всех книках полученную от обращения к API
    },

    bookInfo(bookId) {
        var src = axios.get(`${config.apiPrefix}/api/book/${bookId}`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (response) {
                console.log(response);
            });

        return src;//Возвращаем информацию об определенно книги полученную от обращения к API
    }
}