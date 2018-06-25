import React from 'react';
import BooksList from '../containers/bookList';
import BookDetail from '../containers/bookDetail';

const WebPage = () => (
    <div className="booksInfo">
        <BooksList/>
        <hr/>
        <h2 className="detailText">Details:</h2>
        <BookDetail/>
    </div>
);

export default WebPage;