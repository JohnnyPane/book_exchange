import React from 'react';

import BookIndexItem from './book_index_item';
import BookSearch from '../book_search/book_search';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }

    this.handleExchangeListSubmit = this.handleExchangeListSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchExchangeLists().then(() => this.setState({loaded: true}));
    this.props.fetchBooks();
    this.props.fetchWishlists();
  }

  handleExchangeListSubmit(id) {
    this.props.createExchangeList({author_id: parseInt(id[id.length - 1])});
    this.setState({loaded: false});
  }

  render() {
    const {
      userId,
      books,
      googleBooks,
      searchedBooks,
      createBook,
      wishlists,
      fetchWishlists,
      createWishlist,
      exchangeLists,
      fetchExchangeLists,
      nytBooks,
      nytBestSellers,
    } = this.props;

    const showModal = () => {
      if (this.props.exchangeLists.length === 0) {
        $("#staticBackdrop").modal("show");
      }
    }
   
    return (
      <div className="book-index">
        <div className="book-search">
          <div
            className="modal fade"
            id="staticBackdrop"
            data-backdrop="static"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="staticBackdropLabel"
            aria-modal="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Modal title
                  </h5>
                  {/* <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button> */}
                </div>
                <div className="modal-body">Put in text about how the app works</div>
                <div className="modal-footer">
                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button> */}
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                    onClick={() =>
                      this.handleExchangeListSubmit(userId)
                    }
                  >
                    Let's Get Started!
                  </button>
                </div>
              </div>
            </div>
          </div>

          {this.state.loaded ? showModal() : null}

          <BookSearch
            nytBooks={nytBooks}
            nytBestSellers={nytBestSellers}
            googleBooks={googleBooks}
            searchedBooks={searchedBooks}
            createBook={createBook}
            userId={userId}
            wishlists={wishlists}
            fetchWishlists={fetchWishlists}
            exchangeLists={exchangeLists}
            fetchExchangeLists={fetchExchangeLists}
            createWishlist={createWishlist}
          />
        </div>
        {/* <ul className="book-index-list">
          {books.map(book => (
            <BookIndexItem
              book={book}
              key={book.id}
            />
          ))}
        </ul> */}
      </div>
    );
  }
}

export default BookIndex;