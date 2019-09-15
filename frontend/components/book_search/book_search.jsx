import React from 'react';
import { googleBooks } from '../../actions/book_actions';
import SearchedBookIndexItem from './searched_book_index_item';

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
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.searchedBooks, "searched");
  }

  componentDidUpdate() {
    console.log(this.state.searchInput);
    console.log(this.props.searchedBooks, "searched");
  }

  render() {
    //searched book length > 1 then render

    const { searchedBooks } = this.props;

    const apple = () => (
      searchedBooks[2].map((book, i) => (
        <SearchedBookIndexItem
          book={book}
          key={i}
        />
      ))
    )
    
    return (
      <div className="main-search-page">
        <div className="search-box">
          <input type="search"
            id="books-search"
            placeholder="Search for a book"
            onChange={this.update("searchInput")}
          />
          <button onClick={this.searchGoogle}>Search</button>
        </div>
        <div className="searched-books">
          {searchedBooks.length > 0 ? apple() : null}
        </div>
      </div>
    )
  }
}

export default BookSearch;
