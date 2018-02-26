export function selectBook(book) {
    // Action creator to return an action
    console.log(`${book.title} has been selected`);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}