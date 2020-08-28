import React from 'react';
import { Link } from 'react-router-dom';
import MatchListIndexItem from './match_list_index_item';

class MatchListIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchMatchList();
  }

  render() {
    const { matchList, fetchMatchList } = this.props

    return (
      <div className="match-list-index">
        <h1 className="match-lists-header">Match Lists</h1>
  
        <div class="wrapper-of-matches">
          {matchList.length > 0 ? matchList.map(list => (
          <MatchListIndexItem
              list={list}
              key={Object.keys(list)}
              className="match-list-container"
              />
          )) : null}
        </div>
      </div>
    );
  }
}

export default MatchListIndex;
