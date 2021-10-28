import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Register } from "./pages/auth/register";
import { Login } from "./pages/auth/login";

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/register" component={Register} />
			<Route exact path="/login" component={Login} />
		</Switch>
	</Router>
);

export default App;
