import React from 'react';
import { Route } from 'react-router-dom';

import WelcomeContainer from './welcome/welcome_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
	<div>
		<header>
			<h1>Book Exchange</h1>
			<WelcomeContainer />
		</header>
		<AuthRoute exact path="/login" component={LoginFormContainer} />
		<AuthRoute exact path="/signup" component={SignUpFormContainer} />
	</div>
);

export default App;