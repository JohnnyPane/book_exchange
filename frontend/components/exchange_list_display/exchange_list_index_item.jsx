import React from 'react';
import ExchangeListIndex from './exchange_list_index';

class ExchangeListIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props.list;
    console.log(this.props)
    // Object.keys(books).map(book => console.log(books[book]))
    return (
      <div className="exchange-index-item">
        <ul className="wish-book-index-list">
          {Object.keys(books).map(book => (
            <li key={book} className="wishlist-book-item">
              <img src={books[book].imageURL} className="wish-index-book-img"></img>
              <div>
                <h6>{books[book].title}</h6>
                <h6>{books[book].authors}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ExchangeListIndexItem;