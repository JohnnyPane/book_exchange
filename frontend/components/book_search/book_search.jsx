import React from 'react';
import { googleBooks } from '../../actions/book_actions';
import SearchedBookIndexItem from './searched_book_index_item';
import ReactAutocomplete from 'react-autocomplete';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSearch } from "@fortawesome/free-solid-svg-icons";
// import booksImage from "../../../app/assets/images/books_header.jpg"
// import { Animated } from "react-animated-css";

class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    }
    this.searchGoogle = this.searchGoogle.bind(this);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  searchGoogle(e) {
    e.preventDefault();
    this.props.googleBooks(this.state.searchInput);
  };

  render() {

    const {
      userId,
      searchedBooks,
      createBook,
      fetchWishlists,
      wishlists,
      exchangeLists,
      createWishlist
    } = this.props;

    const createSearchList = () =>
      searchedBooks[2].map((book, i) => (
        <SearchedBookIndexItem
          book={book}
          key={i}
          createBook={createBook}
          userId={userId}
          wishlists={wishlists}
          fetchWishlists={fetchWishlists}
          exchangeLists={exchangeLists}
          createWishlist={createWishlist}
        />
      ));
    
    return (
      <div className="main-search-page">
        <div className="jumbotron jumbotron-fluid splash-page-jumbo">
          <div className="container">
            <h1 className="display-4">Book Exchange</h1>
            <p className="lead">
              A place for like-minded readers to discover new books, start a
              book club, make new friends, and explore the world of literature
            </p>
          </div>
        </div>
        <div className="search-box">
          <div className="search-bar">
            <div className="book-icon">
              <FontAwesomeIcon icon={faBook} style={{ color: "saddlebrown" }} />
            </div>
            <input
              type="search"
              id="books-search"
              placeholder="Enter a book or an author"
              onChange={this.update("searchInput")}
            />
          </div>
          <div className="search-icon">
            <button onClick={this.searchGoogle} className="search-icon-button">
              Search
            </button>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: "lightgray" }}
              className="magnify-icon"
            />
          </div>
        </div>
        <div className="searched-books">
          {searchedBooks.length > 0 ? createSearchList() : null}
        </div>
      </div>
    );
  }
}

export default BookSearch;
