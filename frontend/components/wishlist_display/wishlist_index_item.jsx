import React from 'react';
import WishlistIndex from './wishlist_index';

class WishlistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, genre } = this.props.list;
    return (
      <div className="wishlist-index-item">
        <h3>{title}</h3>
        <h5>{genre}</h5>
      </div>
    )
  }
}

export default WishlistIndexItem