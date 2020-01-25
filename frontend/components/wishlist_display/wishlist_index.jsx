import React from 'react';

import WishlistIndexItem from './wishlist_index_item';

class WishlistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWishlists();
    console.log(this.props)
  }

  render() {
    const { wishlists } = this.props;

    return (
      <div>
        <div className="wishlist-index">
          {wishlists.map(list => (
            <WishlistIndexItem
              list={list}
              key={list.id}
              className="wishlist-container"
            />
          ))}
          </div>
      </div>
    )
  }
}

export default WishlistIndex;