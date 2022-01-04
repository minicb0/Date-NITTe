import React from "react";
import {
	BrowserRouter as Router, Route, Switch, Redirect,
} from "react-router-dom";
import { Login } from "./pages/auth/login";
// import { Navigation } from "./pages/navigation";
import { trial } from "./pages/auth/trial";
// import { Login } from "./pages/auth/login";
import { home } from "./pages/home";
import { Chat } from "./pages/Chat";

const App = () => (
	<Router>
		<Route exact path="/">
			<Redirect to="/login" />
		</Route>
		<Switch>
			<Route exact path="/register" component={trial} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/home" component={home} />
			<Route exact path="/chat" component={Chat} />
		</Switch>
	</Router>
);

export default App;