import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li onClick={()=>this.props.selectBook(book)} key={book.title} className="pointer list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// Below are two functions that allow a component(or container) to access state values as properties

// Anything return from this function will end up as props on the BookList container
function mapStateToProps(state) {
    // whatever is returned will show up as props above inside BookList
    return {
        books: state.books
    };
    //  returns as this.props -> this.props.book
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
    // returns as this.props -> this.props.selectBook
}

// with a container file, make sure to return the container itself and not the component
// connect is the bridge between react and redux
// adding mapStateToProps allowed the state of the container to use global state values as its own properties
// adding mapDispatchToProps allowed the container to use the action function as a property
export default connect(mapStateToProps, mapDispatchToProps)(BookList);