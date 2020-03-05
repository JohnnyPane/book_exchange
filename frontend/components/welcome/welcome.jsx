import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser, logout }) => {
	const sessionLinks = () => (
		<nav className="login-signup">
			<Link to="/login">Login</Link>
			&nbsp;or&nbsp;
			<Link to="/signup">Sign up</Link>
		</nav>
	);
	const personalWelcome = () => (
    <hgroup className="header-group">
      {/* <h2 className="header-name" style={{ margin: "0", paddingRight: "15px" }}>
        Hi, {currentUser.username}!
      </h2> */}

      <div className="btn-group">
        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hi, {currentUser.username}!
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/#">Home</a>
          <a className="dropdown-item" href="/#/wishlists">Wishlists</a>
          <a className="dropdown-item" href="/#/exchange_lists">Exchange List</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>

      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

	return currentUser ? personalWelcome() : sessionLinks();
};

export default Welcome;