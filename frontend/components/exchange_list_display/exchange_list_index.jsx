import React from 'react';

import ExchangeListIndexItem from './exchange_list_index_item'
import { Animated } from "react-animated-css";

class ExchangeListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchExchangeLists();
    console.log(this.props, "props")
  }

  render() {
    const { exchangeLists } = this.props;

    console.log(this.props, "inside")
    return (
      <div>
        <div className="exchange-list-wrapper">
          <h3 className="exchange-list-header">Books to Exchange</h3>
          <div className="exchange-list-index">
            {exchangeLists.map(list => (
              <ExchangeListIndexItem
                list={list}
                key={list.id}
                className="exchange-list-container"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ExchangeListIndex;