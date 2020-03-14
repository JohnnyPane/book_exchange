import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faAngleDoubleRight, faShare, faShareAltSquare, faShareAlt } from '@fortawesome/free-solid-svg-icons';



class MatchListIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.$('[data-toggle="popover"]').popover();
  }

  render() {
    console.log(this.props, "Match list index item")
    const { list } = this.props
    const userName = Object.keys(list)
    // Object.keys(books).map(book => console.log(books[book]))
    return (
      <div className="match-list-index-item">
        <h5 className="user-match-header">{userName}</h5>
        {/* <p style={{marginBottom: "10px", fontSize: "13px"}}>click books to get info</p> */}
        <hr style={{width: "80%", marginTop: 0}} />
        <div className="match-ul-books">
         
          <ul className="match-book-exchange-list">
            {/* <div className="match-list-header-wrapper"> */}
            {/* <h5 className="match-exchange-header">Trade some o' dese</h5> */}
            {/* </div> */}
            {list[userName].exchange_books.map(book => (
              <div className="match-exchange-books-wrapper">
                <li key={book.title} className="match-list-book-item">
                  
                  {/* <div className="match-exchange-title-authors">
                    <h6 className="match-titles-authors-ex-header">{book.title}</h6>
                    <h6 className="match-titles-authors-ex-header" style={{ fontSize: "14px" }}>by {book.authors}</h6>
                  </div> */}

                  <a onClick={e => e.preventDefault()} href="#" data-toggle="popover" data-placement="left" title={book.title} data-html="true" data-content={"by " + book.authors} width='200'><img src={book.imageURL} className="wish-index-book-img"></img></a>
                </li>
              </div>
            ))}
          </ul>
          <div className="match-arrows">
            <i class="fas fa-angle-double-right"></i>
            <FontAwesomeIcon icon={faShare} className="match-right-arrow" size="3x" style={{
              color: "rgba(0, 120, 0, 0.8)", 
              position: "relative",
              left: "10px",
              top: "5px" }} />
            <FontAwesomeIcon icon={faShare} className="fa-rotate-180 match-left-arrow" size="3x" style={{
              color: "rgba(139, 69, 19, 0.85)", 
              position: "relative",
              right: "10px",
              bottom: "5px" }} />
            {/* <FontAwesomeIcon icon={faArrowRight} className="match-right-arrow" size="4x" style={{ color: "rgba(139, 69, 19, 0.85)" }} />
            <FontAwesomeIcon icon={faArrowLeft} className="match-left-arrow" size="4x" style={{ color: "rgba(139, 69, 19, 0.85)" }} /> */}
          </div>
          <ul className="match-book-wish-list">
            {/* <div className="match-list-header-wrapper">
              <h5 className="match-wish-header">For a coupla those</h5>
            </div> */}
            {list[userName].wishlist_books.map(book => (
              <div className="match-wish-books-wrapper">
                <li key={book.title} className="match-list-book-item">
              
                  <a onClick={e => e.preventDefault()} href="#" data-toggle="popover" title={book.title} data-html="true" data-content={"by " + book.authors} width='200'><img src={book.imageURL} className="wish-index-book-img"></img></a>

                  {/* <div className="match-wish-title-authors">
                    <h6 className="match-titles-authors-header">{book.title}</h6>
                    <h6 className="match-titles-authors-header" style={{ fontSize: "14px" }}>by {book.authors}</h6>
                  </div> */}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MatchListIndexItem;