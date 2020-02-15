import React from 'react';
import { nytBooks } from '../../actions/book_actions';

class NYTBestSellers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listType: "hardcover-fiction"
    }
    this.populateNYTlist = this.populateNYTlist.bind(this)
  }

  componentDidUpdate() {
    console.log(this.props)
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  populateNYTlist(e) {
    e.preventDefault();
    this.props.nytBooks(this.state.listType)
    console.log(this.props, "sellers props")
  }

  render() {

    const { results } = this.props.nytBestSellers

    return (
      <div className="nyt-bestsellers-wrapper">
        <h5>New York Times Best Sellers</h5>
        <button onClick={this.populateNYTlist}>Search</button>
        <button onClick={() => console.log(this.props)}>Props</button>
        <ul>
        {results ? results.map((book, i) => (
          <li>{book.book_details[0].title}</li>
        )) : null }
        </ul>
      </div>
    )
  }

}

export default NYTBestSellers;