import React from 'react';
import { Route, Link } from 'react-router-dom';

import WelcomeContainer from './welcome/welcome_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BookIndexContainer from './book_display/book_index_container';
import WishlistIndexContainer from './wishlist_display/wishlist_index_container';
import ExchangeListIndexContainer from './exchange_list_display/exchange_list_index_container';
import MatchListIndexContainer from './match_lists/match_list_index_container';


const App = () => (
  <div>
    <header>
      <nav className="header-nav nav header-logo">
        <Link to="/" className="logo-link">
          <div className="logo">
            <img
              src="https://images.all-free-download.com/images/graphiclarge/creative_tree_logo_vector_graphics_587279.jpg"
              className="tree-logo"
            ></img>
            <h1 style={{ margin: "0" }} className="logo-text">
              Book Exchange
            </h1>
          </div>
        </Link>
        <WelcomeContainer />
      </nav>
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <ProtectedRoute exact path="/" component={BookIndexContainer} />
    <ProtectedRoute
      exact
      path="/exchange_lists"
      component={ExchangeListIndexContainer}
    />
    <ProtectedRoute
      exact
      path="/wishlists"
      component={WishlistIndexContainer}
    />
    <ProtectedRoute
      exact
      path="/match_lists"
      component={MatchListIndexContainer}
    />
    {/* <Route path="/wishlists/:wishlistId" component={WishlistShowContainer} /> */}
  </div>
);

export default App;