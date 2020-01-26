import { connect } from "react-redux";

import ExchangeList from "./exchange_list_index";
import { fetchExchangeLists } from "../../actions/exchange_list_actions";


const mapStateToProps = state => ({
  exchangeLists: Object.keys(state.entities.exchangeLists).map(
    key => state.entities.exchangeLists[key]
  )
});

const mapDispatchToProps = dispatch => ({
  fetchExchangeLists: () => dispatch(fetchExchangeLists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeList);
