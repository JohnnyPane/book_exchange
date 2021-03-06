import React from 'react';
import { nytBooks } from '../../actions/book_actions';

class NYTBestSellers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listType: "hardcover-fiction",
      nytList: "Choose Best Seller List"
    }
    this.populateNYTlist = this.populateNYTlist.bind(this);
    this.searchGoogle = this.searchGoogle.bind(this);
  }

  componentDidMount() {
    this.props.nytBooks(this.state.listType)
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  searchGoogle(e) {
    e.preventDefault();
    this.props.googleBooks(e.currentTarget.value);
  };

  // setListState(e) {
  //   e.preventDefault();
  //   this.setState({
  //     listType: e.currentTarget.value,
  //     nytList: e.currentTarget.name
  //   });
  // }

  populateNYTlist(e) {
    e.preventDefault();
    this.setState({
      listType: e.currentTarget.value,
      nytList: e.currentTarget.name
    }, () => {
      this.props.nytBooks(this.state.listType);
    });
  }

  render() {

    const { results } = this.props.nytBestSellers

    return (
      <div className="nyt-bestsellers-wrapper">
        <div className="nyt-header">
          <h5 style={{ fontFamily: "cursive" }}>New York Times Best Sellers</h5>
          <div className="btn-group dropright">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ fontSize: "12px", backgroundColor: "#230903", borderColor: "#230903"}}
            >
              {this.state.nytList}
            </button>
            <div
              className="dropdown-menu nyt-sellers-list"
              id="nyt-sellers-list"
              aria-labelledby="dropdownMenuButton"
            >
              <button
                className="dropdown-item"
                type="button"
                key={"one"}
                name={"Combined Print & E-Book Fiction"}
                value={"combined-print-and-e-book-fiction"}
                onClick={this.populateNYTlist}
              >
                Combined Print & E-Book Fiction
              </button>
              <button
                className="dropdown-item"
                type="button"
                key={"two"}
                value={"combined-print-and-e-book-nonfiction"}
                name={"Combined Print & E-Book Nonfiction"}
                onClick={this.populateNYTlist}
              >
                Combined Print & E-Book Nonfiction
              </button>
              <button
                className="dropdown-item"
                type="button"
                key={"three"}
                value={"hardcover-fiction"}
                name={"Hardcover Fiction"}
                onClick={this.populateNYTlist}
              >
                Hardcover Fiction
              </button>
              <button
                className="dropdown-item"
                type="button"
                key={"four"}
                value={"hardcover-nonfiction"}
                name={"Hardcover Nonfiction"}
                onClick={this.populateNYTlist}
              >
                Hardcover Nonfiction
              </button>
              <button
                className="dropdown-item"
                type="button"
                key={"five"}
                value={"combined-print-and-e-book-fiction"}
                name={"Paperback Trade Fiction"}
                onClick={this.populateNYTlist}
              >
                Paperback Trade Fiction
              </button>
              <button
                className="dropdown-item"
                type="button"
                key={"six"}
                value={"paperback-nonfiction"}
                name={"Paperback Nonfiction"}
                onClick={this.populateNYTlist}
              >
                Paperback Nonfiction
              </button>
              <button
                className="dropdown-item"
                type="button"
                key={"seven"}
                value={"advice-how-to-and-miscellaneous"}
                name={"Advice, How-To & Miscellaneous"}
                onClick={this.populateNYTlist}
              >
                Advice, How-To & Miscellaneous
              </button>
              <button
                className="dropdown-item"
                type="button"
                key={"eight"}
                value={"childrens-middle-grade-hardcover"}
                name={"Children’s Middle Grade Hardcover"}
                onClick={this.populateNYTlist}
              >
                Children’s Middle Grade Hardcover
              </button>
              <button
                className="dropdown-item"
                type="button"
                key={"nine"}
                value={"picture-books"}
                name={"Children’s Picture Books"}
                onClick={this.populateNYTlist}
              >
                Children’s Picture Books
              </button>
              <button
                className="dropdown-item"
                type="button"
                key={"ten"}
                value={"series-books"}
                name={"Children’s Series"}
                onClick={this.populateNYTlist}
              >
                Children’s Series
              </button>
              <button
                className="dropdown-item"
                type="button"
                key={"eleven"}
                value={"young-adult-hardcover"}
                name={"Young Adult Hardcover"}
                onClick={this.populateNYTlist}
              >
                Young Adult Hardcover
              </button>
            </div>
          </div>
        </div>
        <ol className="nyt-books-list">
          {results
            ? results.map((book, i) => (
                <li className="bestseller-title" key={i}>
                  <button
                    className="bestseller-title"
                    // value={book.isbns[0].isbn10}
                    value={book.book_details[0].title}
                    onClick={this.searchGoogle}
                  >
                    {book.book_details[0].title.toLowerCase()}
                    <br />
                    <div style={{fontSize: "12px", textTransform: "none", marginLeft: "10px"}}>by {book.book_details[0].author}</div>
                  </button>
                </li>
              ))
            : null}
        </ol>
      </div>
    );
  }

}

export default NYTBestSellers;