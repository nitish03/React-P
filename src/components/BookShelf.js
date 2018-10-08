import React, { Component } from 'react';
import Book from './Book'


class BookShelf extends Component {
render() {
  const {books, updateShelf} = this.props;
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books.map((book) => <Book updateShelf={updateShelf} book={book} key={book.id} />)}
        </ol>
      </div>
    </div>
  );
}
}

export default BookShelf
