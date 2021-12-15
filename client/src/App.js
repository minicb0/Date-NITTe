import React from "react";
import {
	BrowserRouter as Router, Route, Switch, Redirect,
} from "react-router-dom";
import { trial } from "./pages/auth/trial";
import { Login } from "./pages/auth/login";

const App = () => (
	<Router>
		<Route exact path="/">
			<Redirect to="/login" />
		</Route>
		<Switch>
			<Route exact path="/register" component={trial} />
			<Route exact path="/login" component={Login} />
		</Switch>
	</Router>
);

export default App;
