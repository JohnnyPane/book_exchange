import React from 'react';
import { NavLink } from 'react-router-dom';

class SearchedBookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist_id: "",
      button_title: "",
      wishlist_index: "",
      wishlist_name: "",
      genre: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExchangeListSubmit = this.handleExchangeListSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateListIdAndIndex = this.updateListIdAndIndex.bind(this);
    this.updateWislistName = this.updateWislistName.bind(this);
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

  updateWislistName(e) {
    return e => this.setState({ wishlist_name: e.currentTarget.value })
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
    console.log(this.props, "search props")
    const { volumeInfo } = this.props.book;
    const { wishlists } = this.props;

    const dataTarget = "#" + this.props.book.id

    const renderImage = () => (
      <img className="search-book-image" src={volumeInfo.imageLinks.smallThumbnail}></img>
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
          <div className="search-book-title-items">
            <div className="search-title-text">
              {volumeInfo.hasOwnProperty("imageLinks") ? renderImage() : null}
              <div className="book-search-titles">
                <div className="search-title-author">
                  <h5>{volumeInfo.title}</h5>
                  <h6>{volumeInfo.authors}</h6>
                </div>
                <div className="dropdown wishlist-dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle wishlist-dropdown"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    value={this.state.button_title}
                    onClick={this.update("button_title")}
                  >
                    {this.state.wishlist_index.length < 1
                      ? "Choose a Wishlist"
                      : updateDropdownName()}
                  </button>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                  >
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
                    <form class="px-4 py-3">
                      <div class="form-group">
                        {/* <label for="wishlistInput">Email address</label> */}
                        <input
                          type="text"
                          class="form-control"
                       
                          // value={this.state.wishlist_name}
                          placeholder="Create Wishlist"
                          onChange={e =>
                            this.setState({ wishlist_name: e.target.value })
                          }
                        ></input>
                        {/* <input
                          type="text"
                          class="form-control"
                          id="genreINput"
                          // value={this.state.wishlist_name}
                          placeholder="genre"
                          onChange={e =>
                            this.setState({ genre: e.target.value })
                          }
                        ></input> */}
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary"
                        onClick={() =>
                          this.props.createWishlist({
                            title: this.state.wishlist_name
                          })
                        }
                      >
                        Create
                      </button>
                    </form>
                  </div>
                </div>
                <div className="search-buttons">
                  <button
                    className="create-book-btn"
                    onClick={this.handleSubmit}
                  >
                    Add to Wish List
                  </button>
                  <button
                    className="create-exchange-book-btn"
                    onClick={this.handleExchangeListSubmit}
                  >
                    Add to Exchange List
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="book-search-description">
            {/* <p>
              <button
                class="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Description
              </button>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">{volumeInfo.description}</div>
            </div> */}
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target={dataTarget}
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      style={{ color: "saddlebrown" }}
                    >
                      Description
                    </button>
                  </h5>
                </div>

                <div
                  id={this.props.book.id}
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">{volumeInfo.description}</div>
                </div>
              </div>
            </div>
          </div>
          {/* <p>{volumeInfo.description}</p> */}
        </div>
      </div>
    );
  }
}

export default SearchedBookIndexItem;