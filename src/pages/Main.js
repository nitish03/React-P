import React, { Component } from 'react';
import BookShelf from '../components/BookShelf'
import More from '../components/More'
import * as BooksAPI from '../BooksAPI'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

//get all books from BooksAPI
  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      console.log(books);
      this.setState({ books });
    });
  }

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

        {/* Books Titles */}
        <BookShelf title='Currently Reading'/>
        <BookShelf title='Want to Read'/>
        <BookShelf title='Read'/>
        </div>
        <More/>
      </div>
    );
  }
}

export default Main
