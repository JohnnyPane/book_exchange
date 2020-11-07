import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Animated } from "react-animated-css";
import { withRouter } from "react-router-dom";

class SearchedBookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist_id: "",
      button_title: "",
      wishlist_index: "",
      wishlist_name: "",
      wishlist_submitted: false,
      genre: "",
      warning: false,
      book_added: false,
      exchange_added: false,
      book_title: this.props.book.volumeInfo.title
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExchangeListSubmit = this.handleExchangeListSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateListIdAndIndex = this.updateListIdAndIndex.bind(this);
    this.updateWislistName = this.updateWislistName.bind(this);
    this.createWishlistSubmit = this.createWishlistSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.state.book_title !== this.props.book.volumeInfo.title) {
      this.setState({
        wishlist_id: "",
        button_title: "",
        wishlist_index: "",
        warning: false,
        book_added: false,
        exchange_added: false,
        wishlist_submitted: false,
        book_title: this.props.book.volumeInfo.title
      });
    }
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

    let author, descript, image, wishlist_id;

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

    if (this.state.wishlist_submitted) {
      console.log(this.props.wishlists[this.props.wishlists.length - 1].id, "JUMANJI")
      wishlist_id = this.props.wishlists[this.props.wishlists.length - 1].id
    } else {
      wishlist_id = this.state.wishlist_id
    }
    const newBook = {
      title: this.props.book.volumeInfo.title,
      authors: author,
      imageURL: image,
      description: descript,
      wishlist_id: wishlist_id
    };
   
    if (this.state.wishlist_submitted == true || this.state.wishlist_index.length > 0) {
      this.props.createBook(newBook);
    } else {
      alert("please select a wishlist to add the book to");
    }
    this.setState({ book_added: true })
  }

  createWishlistSubmit(e) {
    e.preventDefault();
    this.setState({ wishlist_submitted: true });
    this.props.createWishlist({
      title: this.state.wishlist_name,
      genre: this.state.genre
    });
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
      exchange_list_id: this.props.exchangeLists[0].id
    };
    this.props.createBook(newBook);
    this.setState({exchange_added: true})
  }

  render() {
    const { volumeInfo } = this.props.book;
    const { wishlists } = this.props;

    const dataTarget = "#a" + this.props.book.id

    const renderImage = () => (
      <img className="search-book-image" src={volumeInfo.imageLinks.smallThumbnail}></img>
    );

    const renderWarning = () => (
      <Animated animationIn="slideInRight" animationOut="zoomOutLeft" isVisible={true}>
      <div className="alert alert-warning" role="alert" style={{ fontSize: "11.5px", width: "178px", marginBottom: "0.5rem"}}>
        Please Select a Wishlist
      </div>
      </Animated>
    )

    const updateDropdownName = () => {
        const titles = [];
        wishlists.map(list => titles.push(list.title));
        return titles[this.state.wishlist_index];
    };

    const genres = ["Fantasy", "Sci-Fi", "Horror", "Western", "Romance", "Thriller", "Mystery", "Detective", "Dystopia", "Memoir", "Biography", "Play", "Musical", "Satire", "Poetry", "Young Adult", "Children's Lit"]

    return (
      <div className="searched-index-wrapper">
        {/* <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}> */}
        <div className="book-index-list">
          <div className="search-book-title-items">
            <div className="search-title-text">
              <div className="search-image-wrapper">
                {volumeInfo.hasOwnProperty("imageLinks") ? (
                  renderImage()
                ) : (
                  <FontAwesomeIcon
                    icon={faBook}
                    style={{
                      width: "128px",
                      height: "160px",
                      color: "#230903"
                    }}
                  />
                )}
              </div>
              <div className="book-search-titles">
                <div className="search-title-author">
                  <h5>{volumeInfo.title}</h5>
                  <h6>{volumeInfo.authors ? volumeInfo.authors.join(", ") : "unkown"}</h6>
                </div>
                <div className="btn-group dropright wishlist-dropdown">
                  <button
                    className="btn dropdown-toggle wishlist-dropdown"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    value={this.state.button_title}
                    onClick={this.update("button_title")}
                    style={{boxShadow: "0.5px 0.5px 3px grey"}}
                  >
                    {this.state.wishlist_index.length < 1 && this.state.wishlist_submitted == false
                      ? "Choose a Wishlist"
                      : (this.state.wishlist_name.length < 1 && this.state.wishlist_submitted == false) ? updateDropdownName() : this.state.wishlist_name }
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

                    <div className="dropdown-divider"></div>

                    <form className="px-4 py-3">
                      <div className="form-group">
                        {/* <label for="wishlistInput">Email address</label> */}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Create Wishlist"
                          onChange={e =>
                            this.setState({ wishlist_name: e.target.value })
                          }
                        ></input>
                      </div>

                      <div className="form-group">
                        {/* <label for="wishlistInput">Email address</label> */}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Wishlist Genre"
                          onChange={e =>
                            this.setState({ genre: e.target.value })
                          }
                        ></input>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={this.createWishlistSubmit}
                        style={{backgroundColor: "rgb(106, 154, 105)", borderColor: "rgb(106, 154, 105)"}}
                      >
                        Create
                      </button>
                    </form>
                  </div>
                </div>
                <div className="search-buttons">
                  {this.state.wishlist_submitted == true || this.state.wishlist_index.length > 0 ? (
                    this.state.book_added ? (
                      <Animated animationIn="lightSpeedIn" isVisible={true}>
                        <div
                          className="alert alert-success book-added"
                          role="alert"
                        >
                          Book Added!
                        </div>
                      </Animated>
                    ) : (
                      <button
                        className="create-book-btn"
                        onClick={this.handleSubmit}
                      >
                        Wish List
                      </button>
                    )
                  ) : (
                    <button
                      className="create-book-btn"
                      onClick={() => this.setState({ warning: true })}
                    >
                      Wish List
                    </button>
                  )}

                  {this.state.warning ? renderWarning() : null}

                  {this.state.exchange_added ? (
                    <Animated animationIn="lightSpeedIn" isVisible={true}>
                      <div className="alert alert-success book-added" role="alert">
                        Book Added!
                      </div>
                    </Animated>
                  ) : (
                    <button
                      className="create-exchange-book-btn"
                      onClick={this.handleExchangeListSubmit}
                    >
                      Exchange List
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="book-search-description">
            {/* <p>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Description
              </button>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">{volumeInfo.description}</div>
            </div> */}
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne" style={{backgroundColor: "rgba(0, 0, 0, 0)", backgroundImage: "url(https://image.freepik.com/free-vector/collection-tropical-leaves_1324-119.jpg)", backgroundPositionX: "100px", backgroundPositionY: "-30px"}}>
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target={dataTarget}
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      style={{ color: "saddlebrown" }}
                    >
                      Description<FontAwesomeIcon icon={faLeaf} style={{ color: "green", marginLeft: "4px", marginBottom: "1px" }} />
                    </button>
                  </h5>
                </div>

                <div
                  id={"a" + this.props.book.id}
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
        {/* </Animated> */}
      </div>
    );
  }
}

export default withRouter(SearchedBookIndexItem);