import React from 'react';
import WishlistIndex from './wishlist_index';

class WishlistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, genre, books } = this.props.list;
    console.log(this.props)
    Object.keys(books).map(book => console.log(books[book]))
    return (
      <div className="wishlist-index-item">
        <h3>{title}</h3>
        <h5>{genre}</h5>
        <ul className="wish-book-index-list">
          {Object.keys(books).map(book => (
              <li key={book}>
                <img src={books[book].imageURL} className="wish-index-book-img"></img>
                <h6>{books[book].title}</h6>
                <h6>{books[book].authors}</h6>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default WishlistIndexItem