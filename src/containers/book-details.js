import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    render() {
        if(!this.props.activeBook){
            return (
                <div>Select a book to get started.</div>
            )
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.activeBook.title}</div>
            </div>
        )
    }
}

// look into reducers to make sure you're mapping the correct state.
function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);