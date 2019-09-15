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
          <h1>{title}</h1>
          <h3>{authors}</h3>
          <p>{description}</p>
          <img src={imageURL}></img>
        </li>
      </div>
    )
  }
}

export default (BookIndexItem);