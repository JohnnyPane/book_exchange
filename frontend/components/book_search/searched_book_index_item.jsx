import React from 'react';

class SearchedBookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { volumeInfo } = this.props.book;

    const renderImage = () => (
      <img src={volumeInfo.imageLinks.smallThumbnail}></img>
    )
    return (
      <div>
        <h1>{volumeInfo.title}</h1>
        <h3>{volumeInfo.authors}</h3>
        <p>{volumeInfo.description}</p>
        {volumeInfo.hasOwnProperty('imageLinks') ? renderImage() : null}
      </div>
    )
  }
}

export default SearchedBookIndexItem;