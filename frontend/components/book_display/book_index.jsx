import React from 'react';

import BookIndexItem from './book_index_item';
import BookSearch from '../book_search/book_search';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooks();
    console.log(this.props);
  }

  render() {
    const { userId, books, googleBooks, searchedBooks, createBook } = this.props;
    return (
      <div className="book-index">
        <div className ="book-search">
          <BookSearch 
            googleBooks={googleBooks}
            searchedBooks={searchedBooks} 
            createBook={createBook}
            userId={userId}
          />
        </div>
        <ul className="book-index-list">
          {books.map(book => (
            <BookIndexItem
              book={book}
              key={book.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default BookIndex;