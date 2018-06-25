import React, {Component} from 'react';
import {bindActionCreators} from 'redux'; //Импортируем модуль для создания действий
import {connect} from 'react-redux';
import {select} from "../actions/index";

class BooksList extends Component {
    showList (){
        if(this.props.books){
            return this.props.books.map ((book) => {
                return (
                    <li onClick={() => this.props. select (book)} key={book.id}>
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

                    </li>
                );
            });
        }

    }

    render () {
        return (
            <div className="bListItem">
                <ul>
                    {this.showList ()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(BooksList);