import React from 'react';

class BookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, authors, description, imageURL } = this.props.book;
    return (
      <div className="book-index-item">
        <li>
          <h5>{title}</h5>
          <img src={imageURL}></img>
          <h6>{authors}</h6>
          <p>{description}</p>
        </li>
      </div>
    )
  }
}

export default (BookIndexItem);