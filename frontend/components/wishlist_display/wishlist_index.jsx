import React from 'react';

import WishlistIndexItem from './wishlist_index_item';
import { Animated } from "react-animated-css";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 0
};

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
            <Masonry
              className={"my-gallery-class"} // default ''
              elementType={"ul"} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
              // imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
              {wishlists.map(list => (
                <WishlistIndexItem
                  list={list}
                  key={list.id}
                  className="wishlist-container"
                />
              ))}
            </Masonry>
          </div>
        </Animated>
      </div>
    );
  }
}

export default WishlistIndex;