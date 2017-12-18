import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageHome from './components/PageHome/PageHome';
import PageEmployee from './components/PageEmployee/PageEmployee';
import PageEmployer from './components/PageEmployer/PageEmployer';


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={PageHome} />
					<Route exact path="/employee" component={PageEmployee} />
					<Route path="/employer" component={PageEmployer} />
				</div>
			</Router>
		);
	}
}

export default App;
