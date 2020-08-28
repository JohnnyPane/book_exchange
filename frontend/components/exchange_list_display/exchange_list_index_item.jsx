import React from 'react';

class ExchangeListIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props.list;

    return (
      <div className="exchange-index-item">
        <ul className="wish-book-index-list">
          {this.props.list.books ? Object.keys(books).map(book => (
            <li key={book} className="wishlist-book-item">
              <img src={books[book].imageURL} className="wish-index-book-img"></img>
              <div>
                <h6>{books[book].title}</h6>
                <h6 style={{ fontSize: "14px" }}>by {books[book].authors}</h6>
              </div>
            </li>
          )) : null }
        </ul>
      </div>
    )
  }
}

export default ExchangeListIndexItem;