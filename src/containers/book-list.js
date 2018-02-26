import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookList extends Component{

    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li key={book.title} className="list-group-item">
                {book.title}
                </li>
            )
        })
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
               {this.renderList()}
            </ul>
        )
    }
}

// state contains array of books and active books
// if state every changes then this function is ran again
function mapStateToProps(state){
    // whatever is returned will show up as props above inside booklist
    return {
        books: state.books
    };
    //  returns as this.props -> this.props.book
}

// with a container file, make sure to return the container itself and not the component
// connect is the bridge between react and redux
export default connect(mapStateToProps)(BookList);