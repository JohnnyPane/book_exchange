import React from 'react';
import { googleBooks } from '../../actions/book_actions';
import SearchedBookIndexItem from './searched_book_index_item';
import ReactAutocomplete from 'react-autocomplete';

class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    }
    this.searchGoogle = this.searchGoogle.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  searchGoogle(e) {
    e.preventDefault();
    this.props.googleBooks(this.state.searchInput);
  };

  render() {

    const { userId, searchedBooks, createBook, fetchWishlists, wishlists } = this.props;

    const createSearchList = () => (
      searchedBooks[2].map((book, i) => (
        <SearchedBookIndexItem
          book={book}
          key={i}
          createBook={createBook}
          userId={userId}
          wishlists={wishlists}
          fetchWishlists={fetchWishlists}
        />
      ))
    )
    
    return (
      <div className="main-search-page">
        <div className="search-box">
          <input type="search"
            id="books-search"
            placeholder="Enter a book or an author"
            onChange={this.update("searchInput")}
          />
          <button onClick={this.searchGoogle}>Search</button>
        </div>
        <div className="searched-books">
          {searchedBooks.length > 0 ? createSearchList() : null}
        </div>
      </div>
    )
  }
}

export default BookSearch;
