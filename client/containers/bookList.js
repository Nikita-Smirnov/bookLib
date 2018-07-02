import React, {Component} from 'react';
import {connect} from 'react-redux';
import {allBooks} from "../actions/index";
import {Link} from 'react-router';

class BooksList extends Component {
    constructor() {
        super(...arguments);
        let books = allBooks(); //Получаем все книги
        this.props.dispatch(books);
    }

    showList() {
        if (this.props.books) {
            return this.props.books.map((book) => {
                return (
                    <li key={book.id}>
                        <Link to={`/${book.id}`}>
                            <div className="bookContainer">
                                <div className="bookMainInfo">
                                    <img src={book.img}/>
                                    <span>{book.name}</span>
                                </div>
                                <div className="bookInfo">
                                    <span>{book.author}</span><br/>
                                    <span>{book.genre}</span><br/>
                                    <span className="price">{book.price}</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                );
            });
        }

    }

    render() {
        return (
            <div className="bListItem">
                <ul>
                    {this.showList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        books: store.books.books,
        isLoading: store.books.isLoading
    };
}

export default connect(mapStateToProps)(BooksList);