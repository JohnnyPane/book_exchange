import React from 'react';

import WishlistIndexItem from './wishlist_index_item';
import { Animated } from "react-animated-css";

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
        <Animated animationIn="slideInUp" isVisible={true}>
        <div className="wishlist-index">
          {wishlists.map(list => (
            <WishlistIndexItem
              list={list}
              key={list.id}
              className="wishlist-container"
            />
          ))}
          </div>
        </Animated>
      </div>
    )
  }
}

export default WishlistIndex;