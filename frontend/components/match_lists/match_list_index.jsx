import React from 'react';
import { Link } from 'react-router-dom';

class MatchListIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchMatchList();
  }

  render() {
    return (
      <div className="match-list-index">
        <h1>Match List</h1>
      </div>
    );
  }
}

export default MatchListIndex;
