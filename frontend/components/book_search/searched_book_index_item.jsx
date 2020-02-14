import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchedBookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist_id: "",
      button_title: "",
      wishlist_index: "",
      wishlist_name: "",
      genre: "",
      warning: false
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
      this.setState({ warning: false })
    };
  }

  updateWislistName(e) {
    return e => this.setState({ wishlist_name: e.currentTarget.value })
  }

  // Attach a book to a wishlist
  handleSubmit(e) {
    e.preventDefault();

    let author, descript, image;

    if (this.props.book.volumeInfo.authors) {
      author = this.props.book.volumeInfo.authors.join(", ");
    } else {
      author = "None"
    }

    if (this.props.book.volumeInfo.description) {
      descript = this.props.book.volumeInfo.description;
    } else {
     descript = "No description available"
    }

    if (this.props.book.volumeInfo.imageLinks) {
      image = this.props.book.volumeInfo.imageLinks.smallThumbnail;
    } else {
      image = null;
    }
    const newBook = {
      title: this.props.book.volumeInfo.title,
      authors: author,
      imageURL: image,
      description: descript,
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
    let author, descript, image;

    if (this.props.book.volumeInfo.authors) {
      author = this.props.book.volumeInfo.authors.join(", ");
    } else {
      author = "None";
    }

    if (this.props.book.volumeInfo.description) {
      descript = this.props.book.volumeInfo.description;
    } else {
      descript = "No description available";
    }

    if (this.props.volumeInfo.imageLinks) {
      image = this.props.volumeInfo.imageLinks.smallThumbnail;
    } else {
      image = null;
    }

    const newBook = {
      title: this.props.book.volumeInfo.title,
      authors: author,
      imageURL: image,
      description: descript,
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
      <img className="search-book-image" src={volumeInfo.imageLinks.smallThumbnail} style={{borderRadius: "5px"}}></img>
    );

    const renderWarning = () => (
      <div class="alert alert-warning" role="alert">
        Please Select a Wishlist
      </div>
    )

    const updateDropdownName = () => {
      const titles = [];
      wishlists.map(list => titles.push(list.title));
      return titles[this.state.wishlist_index];
    };

    const genres = ["Fantasy", "Sci-Fi", "Horror", "Western", "Romance", "Thriller", "Mystery", "Detective", "Dystopia", "Memoir", "Biography", "Play", "Musical", "Satire", "Poetry", "Young Adult", "Children's Lit"]

    console.log(wishlists, "lists");

    return (
      <div className="searched-index-wrapper">
        <div className="book-index-list">
          <div className="search-book-title-items">
            <div className="search-title-text">
              <div className="search-image-wrapper">
                {volumeInfo.hasOwnProperty("imageLinks") ? (
                  renderImage()
                ) : (
                  <FontAwesomeIcon
                    icon={faBook}
                    style={{ width: "128px", height: "160px", color: "green" }}
                  />
                )}
              </div>
              <div className="book-search-titles">
                <div className="search-title-author">
                  <h5>{volumeInfo.title}</h5>
                  <h6>{volumeInfo.authors}</h6>
                </div>
                <div className="btn-group dropright wishlist-dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle wishlist-dropdown"
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

                    <div class="dropdown-divider"></div>

                    <form class="px-4 py-3">
                      <div class="form-group">
                        {/* <label for="wishlistInput">Email address</label> */}
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Create Wishlist"
                          onChange={e =>
                            this.setState({ wishlist_name: e.target.value })
                          }
                        ></input>
                      </div>

                      <div class="form-group">
                        {/* <label for="wishlistInput">Email address</label> */}
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Wishlist Genre"
                          onChange={e =>
                            this.setState({ genre: e.target.value })
                          }
                        ></input>
                      </div>

                      <button
                        type="submit"
                        class="btn btn-warning"
                        onClick={() =>
                          this.props.createWishlist({
                            title: this.state.wishlist_name,
                            genre: this.state.genre
                          })
                        }
                      >
                        Create
                      </button>
                    </form>
                  </div>
                </div>
                <div className="search-buttons">
                 {this.state.wishlist_index.length > 0 ? 
                 <button
                    className="create-book-btn"
                    onClick={this.handleSubmit}
                  >
                    Add to Wish List
                  </button> :
                  <button
                    className="create-book-btn"
                    onClick={() => this.setState({warning: true})}
                  >
                    Add to Wish List
                 </button> }

                  {this.state.warning ? (renderWarning()) : null}

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
                  {volumeInfo.description ? (
                    <div className="card-body">{volumeInfo.description}</div>
                  ) : (
                    <div className="card-body">No description available</div>
                  )}
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