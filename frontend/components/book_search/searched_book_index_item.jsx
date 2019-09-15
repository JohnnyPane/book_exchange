import React from 'react';

class SearchedBookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { volumeInfo } = this.props.book;
    return (
      <div>
        <h1>{volumeInfo.title}</h1>
        <h3>{volumeInfo.authors}</h3>
        <p>{volumeInfo.description}</p>
        <img src={volumeInfo.imageLinks.smallThumbnail}></img>
      </div>
    )
  }
}

export default SearchedBookIndexItem;