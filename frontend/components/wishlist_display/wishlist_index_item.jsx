import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Animated } from "react-animated-css";


class WishlistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, genre, books } = this.props.list;

    return (
      <div className="wishlist-index-item">
        {/* <Animated animationIn="slideInUp" isVisible={true}> */}
        <div className="wishlist-index-titles">
          <h3>{title}</h3>
          <h5 style={{ marginBottom: "0.1rem" }}>Genre: {genre ? genre : "none"}</h5>
          <hr style={{width: "80%", marginBottom: "1.5em"}}></hr>
        </div>
        <ul className="wish-book-index-list">
          {this.props.list.books ? Object.keys(books).map(book => (
              <li key={book} className="wishlist-book-item">
               {books[book].imageURL.length > 0 ? <img src={books[book].imageURL} className="wish-index-book-img"></img> : <FontAwesomeIcon icon={faBook} style={{ width: "44px", height: "66px", color: "green" }} /> }
                <div>
                  <h6>{books[book].title}</h6>
                  <h6>{books[book].authors}</h6>
                </div>
              </li>
            )) : null }
        </ul>
        {/* </Animated> */}
      </div>
    )
  }
}

export default WishlistIndexItem