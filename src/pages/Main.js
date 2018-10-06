import React, { Component } from 'react';
import BookShelf from '../components/BookShelf'
import More from '../components/More'

class Main extends Component {
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        <BookShelf/>
        </div>
        <More/>
      </div>
    );
  }
}

export default Main
