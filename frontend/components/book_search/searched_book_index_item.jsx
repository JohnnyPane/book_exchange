import React from 'react';
import { NavLink } from 'react-router-dom';

class SearchedBookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist_id: "",
      button_title: "",
      wishlist_index: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExchangeListSubmit = this.handleExchangeListSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateListIdAndIndex = this.updateListIdAndIndex.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  updateListIdAndIndex(id) {
    return e => {
      this.setState({ wishlist_index: e.currentTarget.value });
      this.setState({ wishlist_id: id });
    };
  }

  // Attach a book to a wishlist
  handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      title: this.props.book.volumeInfo.title,
      authors: this.props.book.volumeInfo.authors.join(", "),
      imageURL: this.props.book.volumeInfo.imageLinks.smallThumbnail,
      description: this.props.book.volumeInfo.description,
      wishlist_id: this.state.wishlist_id
    };
    console.log(this.state.wishlist_index.length)
    if (this.state.wishlist_index.length > 0) {
      console.log(newBook);
      this.props.createBook(newBook);
    } else {
      alert("please select a wishlist to add the book to");
    }
  }

  handleExchangeListSubmit(e) {
    e.preventDefault();
    const newBook = {
      title: this.props.book.volumeInfo.title,
      authors: this.props.book.volumeInfo.authors.join(", "),
      imageURL: this.props.book.volumeInfo.imageLinks.smallThumbnail,
      description: this.props.book.volumeInfo.description,
      exchange_list_id: this.props.exchangeLists[0].id
    };
    this.props.createBook(newBook);
  }

  render() {
    const { volumeInfo } = this.props.book;
    const { wishlists } = this.props;

    const renderImage = () => (
      <img src={volumeInfo.imageLinks.smallThumbnail}></img>
    );

    const updateDropdownName = () => {
      const titles = [];
      wishlists.map(list => titles.push(list.title));
      return titles[this.state.wishlist_index];
    };

    console.log(wishlists, "lists");

    return (
      <div className="searched-index-wrapper">
        <div className="book-index-list">
          <h1>{volumeInfo.title}</h1>
          <h3>{volumeInfo.authors}</h3>
          <p>{volumeInfo.description}</p>
          {volumeInfo.hasOwnProperty("imageLinks") ? renderImage() : null}
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            value={this.state.button_title}
            onClick={this.update("button_title")}
          >
            {this.state.wishlist_index.length < 1
              ? "choose a wishlist"
              : updateDropdownName()}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            {wishlists.map((list, i) => {
              return (
                <button
                  className="dropdown-item"
                  type="button"
                  key={i}
                  value={i}
                  onClick={this.updateListIdAndIndex(list.id)}
                >
                  {list.title}
                </button>
              );
            })}
          </div>
        </div>
        <button className="create-book-btn" onClick={this.handleSubmit}>
          Add to Wish List
        </button>
        <button
          className="create-book-btn"
          onClick={console.log(this.state)}
          // onClick={this.handleExchangeListSubmit}
        >
          Add to Exchange List
        </button>
      </div>
    );
  }
}

export default SearchedBookIndexItem;