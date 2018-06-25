import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render () {
        if(!this.props.book){
            return (<p>Выберите книгу!</p>);
        }
        return (
            <div className="detailBook">
                <div className="detailBookImage">
                    <img src={this.props.book.img}/>
                </div>
                <div className="detailBookInformation">
                    <h2>{this.props.book.name}</h2>
                    <br/>
                    <p className="author">
                        <span>Автор: </span>
                        {this.props.book.author}
                    </p>
                    <br/>
                    <p className="genre">
                        <span>Жанр: </span>
                        {this.props.book.genre}
                    </p>
                    <br/>
                    <p className="price">
                        <span>Цена: </span>
                        {this.props.book.price}
                    </p>
                    <br/>
                    <p className="description">Описание: {this.props.book.description}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.active
    };
}

export default connect(mapStateToProps)(BookDetail);