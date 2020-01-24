import React from 'react';

class BookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, authors, description, imageURL, id } = this.props.book;
    return (
      <div className="book-index-item">
        <li>
          <div>
            <img src={imageURL}></img>
            <h5>{title}</h5>
            <h6>{authors}</h6>
            <p>
              <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={"#" + id} aria-expanded="false" aria-controls={id}>Description</button>
            </p>
            <div className="row">
              <div className="col">
                <div className="collapse" id={id}>
                  <div className="card card-body">
                    {description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    )
  }
}

{/* <div className="book-index-item">
  <li >
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={imageURL} alt={title}></img>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{authors}</p>
      <ul className="list-group list-group-flush">
        <p>{description}</p>
      </ul>
    </div>
  </li>
</div> */}

export default (BookIndexItem);