import React from 'react';

export default class WebPage extends React.Component {
    render() {
        return (
            <div className="booksInfo">
                {this.props.children}
            </div>);
    }
}