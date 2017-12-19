import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageHome from './components/PageHome/PageHome';
import PageEmployee from './components/PageEmployee/PageEmployee';
import PageEmployer from './components/PageEmployer/PageEmployer';
import NotFound from './components/NotFound/NotFound';


class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={PageHome} />
					<Route exact path="/employee" component={PageEmployee} />
					<Route exact path="/employer" component={PageEmployer} />
					<Route exact path='*' component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
