import { connect } from "react-redux";

import MatchListIndex from "./match_list_index";
import { fetchMatchList } from "../../actions/match_list_actions";

const mapStateToProps = state => ({
  exchangeLists: state.entities.matchLists
});

const mapDispatchToProps = dispatch => ({
  fetchMatchList: () => dispatch(fetchMatchList())
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchListIndex);
