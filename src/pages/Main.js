import React, { Component } from 'react';
import BookShelf from '../components/BookShelf'
import More from '../components/More'
import * as BooksAPI from '../BooksAPI'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allBooks: {
        read: [],
      currentlyReading: [],
      wantToRead: []
      }
    }
  }

//get all books from BooksAPI
  componentDidMount(){
    BooksAPI.getAll()
    .then(books => {
      const allBooks = {
        read: [],
        currentlyReading: [],
        wantToRead: []
      };

      for (let book in books) {
        // Pushes all default, cached, and updated books to their respective object-nested arrays.
        allBooks[books[book].shelf].push(books[book]);
        console.log(allBooks);
      }
      this.setState({ allBooks });
    });
  }

  updateShelf = (book, shelf) => {
    book.shelf = shelf;
    this.setState((state) => ({
      allBooks: state.allBooks.filter((b) => b.id !== book.id).concat([book])
    }));
    BooksAPI.update(book, shelf);
  }

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

        {/* Books Titles and filter books from shelf */}
        <BookShelf updateShelf = {this.updateShelf} title='Currently Reading' books = {this.state.allBooks.currentlyReading} />
        <BookShelf updateShelf = {this.updateShelf} title='Want To Read' books = {this.state.allBooks.wantToRead} />
        <BookShelf updateShelf = {this.updateShelf} title='Read' books = {this.state.allBooks.read} />
        </div>
        <More/>
      </div>
    );
  }
}

export default Main
