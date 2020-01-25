import React from 'react';
import { Route } from 'react-router-dom';

import WelcomeContainer from './welcome/welcome_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BookIndexContainer from './book_display/book_index_container';
import WishlistIndexContainer from './wishlist_display/wishlist_index_container';
// import Logo from '../../app/assets/images/treelogo.pdf'


const App = () => (
  <div>
    <header>
      <nav className="header-nav nav sticky-top">
        <div className="logo">
          <img
            src="https://images.all-free-download.com/images/graphiclarge/creative_tree_logo_vector_graphics_587279.jpg"
            className="tree-logo"
          ></img>
          <h1 style={{ margin: "0" }} className="logo-text">
            Book Exchange
          </h1>
        </div>
        <WelcomeContainer />
      </nav>
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <ProtectedRoute exact path="/" component={BookIndexContainer} />
    <ProtectedRoute
      exact
      path="/wishlists"
      component={WishlistIndexContainer}
    />
    {/* <Route path="/wishlists/:wishlistId" component={WishlistShowContainer} /> */}
  </div>
);

export default App;